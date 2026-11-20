# web-ui

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Visit records

The server records one authenticated HTML page visit per user and browser session in
`custom_data_connector_web_ui_audit.visits`, including the first visit time, Keycloak subject, email,
and client roles at that time. Reloads and navigation in the same session do
not create additional records. `resource_access[KEYCLOACK_CLIENTID].roles` is
the list of **client roles**, not necessarily Keycloak groups. Ensure the
Keycloak **access token** includes the `email` claim; otherwise page requests
fail rather than silently omit records.

Run [`server/schema.sql`](./server/schema.sql) in the existing PostgreSQL
database before deploying. `new Pool()` reads PostgreSQL connection details
from the container's `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, and
`PGPASSWORD` environment variables; the application does not fetch credentials
from Keycloak or from a file in this repository. Supply host/database through
deployment configuration and user/password through secret references. For
example, add entries like these under `service.deployment.env` (using the
actual database endpoint and your own provisioned secret names):

```yaml
PGHOST:
  value: your-postgres-service
PGPORT:
  value: "5432"
PGDATABASE:
  value: your-database
PGUSER:
  type: secretKeyRef
  name: your-web-ui-db-credentials
  key: username
PGPASSWORD:
  type: secretKeyRef
  name: your-web-ui-db-credentials
  key: password
```

The server always requires TLS for PostgreSQL and verifies its certificate.
Make the database CA trusted by the Node.js runtime if it is not publicly
trusted; the database hostname must match its certificate. The
application database role needs access only to the `custom_data_connector_web_ui_audit`
schema and its two tables.
Grant read access to visit records only to named administrators via a separate
read-only database role. Do not expose individual records through Prometheus.

Sessions are shared via PostgreSQL; the session table temporarily tracks which
users have been recorded in each session. No session ID or hash is stored in
the visit records. A visit is deduplicated across pods and restarts. The
session cookie is restricted to the browser session, though
browser session-restore features may keep it alive longer. Expired visit rows
are removed on startup and daily after 12 months. Backups and replicas also
need a matching retention policy. Approve the purpose, access, and retention
under your municipality's privacy process before enabling this collection.

Example restricted queries:

```sql
SELECT visited_at, email, roles
FROM custom_data_connector_web_ui_audit.visits
ORDER BY visited_at DESC;

SELECT date_trunc('month', visited_at) AS month, email, count(*) AS visits
FROM custom_data_connector_web_ui_audit.visits
GROUP BY 1, 2
ORDER BY 1 DESC, 2;
```
