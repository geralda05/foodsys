var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended:true,
}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var connections = require('./configs/connection');

var assets = require('./routes/assets');
app.use('/',assets);

var registros = require("./routes/registros")
app.use('/registros',registros);

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname,'./public/html','index.html'));
});

module.exports = app;
