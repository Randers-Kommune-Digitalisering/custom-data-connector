const express = require('express');
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

var app = express();

const port = process.env.PORT || 3000;
const customDataConnectorHost = process.env.CUSTOM_DATA_CONNECTOR_HOST;
//const customDataConnectorPort = process.env.CUSTOM_DATA_CONNECTOR_PORT;

app.use(cors())

app.use('/all', createProxyMiddleware('/all', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/status', createProxyMiddleware('/all', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/imported', createProxyMiddleware('/exported', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/exported', createProxyMiddleware('/exported', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/meta', createProxyMiddleware('/meta', {target: 'http://' + customDataConnectorHost, secure: false}));
app.use('/data', createProxyMiddleware('/data', {target: 'http://' + customDataConnectorHost, secure: false}));

app.use(express.static('dist'));

app.use('*', express.static('dist'));

app.listen(port, () => {
    console.log(`App listening on port:${port}`);
});