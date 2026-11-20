CREATE SCHEMA IF NOT EXISTS custom_data_connector_web_ui_audit;

CREATE TABLE IF NOT EXISTS custom_data_connector_web_ui_audit.session (
  sid varchar PRIMARY KEY,
  sess json NOT NULL,
  expire timestamp(6) NOT NULL,
  audited_users text[] NOT NULL DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS session_expire_idx ON custom_data_connector_web_ui_audit.session (expire);

CREATE TABLE IF NOT EXISTS custom_data_connector_web_ui_audit.visits (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  visited_at timestamptz NOT NULL DEFAULT now(),
  user_id text NOT NULL,
  email text NOT NULL,
  roles text[] NOT NULL
);
CREATE INDEX IF NOT EXISTS visits_visited_at_idx ON custom_data_connector_web_ui_audit.visits (visited_at);
