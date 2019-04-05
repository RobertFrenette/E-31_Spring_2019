require('dotenv').config();
 
var express    = require('express');
var hbs        = require('hbs');
var path       = require('path');
var bodyparser = require('body-parser');
var log        = require('log-util');

var mountains  = require('./routes/mountains.js');
 
// Connect to DB
const {mongoose} = require('./db/mongoose');
 
var app = express();

hbs.registerPartials(__dirname + '/views/partials'); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mountains', mountains);
 
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
