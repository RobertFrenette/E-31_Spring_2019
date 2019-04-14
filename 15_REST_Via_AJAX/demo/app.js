require('dotenv').config();
 
var express    = require('express');
var path       = require('path');
var bodyparser = require('body-parser');
var log        = require('log-util');
var api        = require('./routes/api.js');
 
// Connect to DB
const {mongoose} = require('./db/mongoose');
 
var app = express();

var jsonParser = bodyparser.json();

app.use('/api', jsonParser, api);
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.use((req, res, next) => {
    log.error(`404: ${req.url}`);
    res.status(404).end('Error: 404 - Page Not Found.');
});
 
app.use((req, res, next) => {
    log.error(`500: ${req.url}`);
    res.status(500).end('Error!');
});

module.exports = app;
