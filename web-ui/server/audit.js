const path = require('node:path');

function isPageVisit(req) {
  return req.method === 'GET' &&
    (req.path === '/' || req.path === '/index.html' || !path.extname(req.path)) &&
    req.accepts('html');
}

function createVisitRecorder(pool, resource) {
  return async function recordVisit(req, res, next) {
    if (!isPageVisit(req)) return next();

    const identity = req.kauth?.grant?.access_token?.content;
    const roles = identity?.resource_access?.[resource]?.roles;
    if (!identity?.sub || !identity?.email || !Array.isArray(roles) || !req.sessionID) {
      console.error('Cannot record visit: required identity claim or session is missing');
      return res.status(500).send('Visit could not be recorded');
    }

    let client;
    let inTransaction = false;
    try {
      client = await pool.connect();
      await client.query('BEGIN');
      inTransaction = true;
      const { rows } = await client.query(
        'SELECT audited_users FROM custom_data_connector_web_ui_audit.session WHERE sid = $1 FOR UPDATE',
        [req.sessionID]
      );
      if (rows.length === 0) {
        const error = new Error('Session is unavailable');
        error.code = 'SESSION_MISSING';
        throw error;
      }

      if (!rows[0].audited_users.includes(identity.sub)) {
        await client.query(
          `INSERT INTO custom_data_connector_web_ui_audit.visits (user_id, email, roles)
           VALUES ($1, $2, $3)`,
          [identity.sub, identity.email, roles]
        );
        await client.query(
          `UPDATE custom_data_connector_web_ui_audit.session
           SET audited_users = array_append(audited_users, $2) WHERE sid = $1`,
          [req.sessionID, identity.sub]
        );
      }
      await client.query('COMMIT');
      inTransaction = false;
      next();
    } catch (error) {
      if (inTransaction) {
        try {
          await client.query('ROLLBACK');
        } catch (rollbackError) {
          console.error('Failed to roll back visit transaction:', rollbackError.code || 'database error');
        }
      }
      console.error('Failed to record visit:', error.code || 'database error');
      res.status(503).send('Visit could not be recorded');
    } finally {
      client?.release();
    }
  };
}

module.exports = { createVisitRecorder, isPageVisit };
