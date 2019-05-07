var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var collector = express();

collector.use(bodyParser.urlencoded({
  extended:true,
}))

collector.use(bodyParser.json());
collector.use(cookieParser());
collector.use(express.static(path.join(__dirname, 'public')));

/* Conexión de la BD */
var connections = require('../configs/connection');



module.exports = collector;