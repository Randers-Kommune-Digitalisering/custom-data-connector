var Keycloak = require('keycloak-connect');
var express = require('express')
var session = require('express-session');
const PgSession = require('connect-pg-simple')(session);
const { Pool } = require('pg');
const { createVisitRecorder } = require('./audit');
var cors = require('cors');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const customDataConnectorHost = process.env.CUSTOM_DATA_CONNECTOR_HOST;
const authServerUrl = process.env.KEYCLOACK_AUTH_URL;
const resource = process.env.KEYCLOACK_CLIENTID;
const secret = process.env.KEYCLOACK_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;
const pool = new Pool({ ssl: { rejectUnauthorized: true } });
const sessionStore = new PgSession({ pool, schemaName: 'custom_data_connector_web_ui_audit' });
 

function hasRole(token, request) {
  if(token.content.resource_access[resource]) {
      request.headers.auth = token.content.resource_access[resource].roles
      return true
  } else return false
}

function setRoles(token, request) {
  if(token.content.resource_access[resource]) {
      request.roles = token.content.resource_access[resource].roles
      request.username = token.content.preferred_username
      return true
  } else return false
}

let kcconfig = {
    realm: "randers-kommune",
    authServerUrl: authServerUrl.replace(/(\r\n|\n|\r)/gm, ""),
    resource: resource,
    sslRequired: "external",
    credentials: {
        secret: secret
    }
}
 
var keycloak = new Keycloak({
  store: sessionStore
}, kcconfig);
 
var sess = {
  secret: cookie_secret,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    secure: 'auto',
    sameSite: 'lax'
  }
}

var corsOptions = {
    origin: function(origin, callback){
          callback(null, null);
    }
  }

var app = express();
app.set('trust proxy', 1);
app.use(cors(corsOptions));
app.use(session(sess))
app.use(keycloak.middleware());

app.get('/health', (req, res) => { res.send('ok') });

app.use('/in', keycloak.protect(hasRole), createProxyMiddleware('/in', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/out', keycloak.protect(hasRole), createProxyMiddleware('/out', {target: 'http://' + customDataConnectorHost, secure: false}));

app.get('/roles', keycloak.protect(setRoles), (req, res) => {
  res.send({roles: req.roles, username: req.username})
})

const recordVisit = createVisitRecorder(pool, resource);
app.use(keycloak.protect(), recordVisit, express.static('dist'));

app.use('*', keycloak.protect(), express.static('dist'));

async function removeExpiredVisits() {
  await pool.query("DELETE FROM custom_data_connector_web_ui_audit.visits WHERE visited_at < now() - interval '12 months'");
}

async function start() {
  await pool.query('SELECT 1 FROM custom_data_connector_web_ui_audit.session LIMIT 0');
  await removeExpiredVisits();
  setInterval(() => {
    removeExpiredVisits().catch((error) => {
      console.error('Failed to remove expired visits:', error.code || 'database error');
      process.exit(1);
    });
  }, 24 * 60 * 60 * 1000).unref();
  app.listen(port, () => {
    console.log(`App listening on port:${port}`);
  });
}

start().catch((error) => {
  console.error('Visit database is unavailable:', error.code || 'database error');
  process.exitCode = 1;
  pool.end();
});