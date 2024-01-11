var Keycloak = require('keycloak-connect');
var express = require('express')
var session = require('express-session');
var cors = require('cors');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');

const port = process.env.PORT || 3000;
const customDataConnectorHost = process.env.CUSTOM_DATA_CONNECTOR_HOST;
const authServerUrl = process.env.KEYCLOACK_AUTH_URL;
const resource = process.env.KEYCLOACK_CLIENTID;
const secret = process.env.KEYCLOACK_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;
 

function hasRole(token, request) {
    if(token.content.resource_access[resource]) {
        console.log(token.content.resource_access[resource])
        request.headers.auth = token.content.resource_access[resource].roles
        return true
    } else return false
  }

var memoryStore = new session.MemoryStore();

let kcconfig = {
    realm: "randers-kommune",
    authServerUrl: authServerUrl,
    resource: resource,
    sslRequired: "external",
    credentials: {
        secret: secret
    }
}
 
var keycloak = new Keycloak({
  store: memoryStore
}, kcconfig);
 
var sess = {
  secret: cookie_secret,
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
  cookie: {
    secure: false,
  }
}

var corsOptions = {
    origin: function(origin, callback){
          callback(null, null);
    }
  }

var app = express();
app.use(cors(corsOptions));
app.use(session(sess))
app.use(keycloak.middleware());

app.use('/in', keycloak.protect(hasRole), createProxyMiddleware('/in', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/out', keycloak.protect(hasRole), createProxyMiddleware('/out', {target: 'http://' + customDataConnectorHost, secure: false}));

app.use( keycloak.protect(), express.static('dist'));

app.use('*', keycloak.protect(), express.static('dist'));

app.listen(port, () => {
    console.log(`App listening on port:${port}`);
});