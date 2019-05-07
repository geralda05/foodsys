var express = require('express');
var app = express();

assets = [

    app.use('/assets/jquery/js', express.static(__dirname + '/..public/assets/jquery/js')),
    app.use('/assets/bootstrap/js', express.static(__dirname + '/..public/assets/bootstrap/js')),
    app.use('/assets/bootstrap/css', express.static(__dirname + '/..public/assets/bootstrap/css')),
    app.use('/assets/fontawesome/js', express.static(__dirname + '/..public/assets/fontawesome/js')),
    app.use('/assets/fontawesome/css', express.static(__dirname + '/..public/assets/fontawesome/css')),
    app.use('/assets/fontawesome/fonts', express.static(__dirname + '/..public/assets/fontawesome/webfonts')),
    app.use('/css', express.static(__dirname + '/../public/stylesheets')),
    app.use('/img', express.static(__dirname + '/../public/images')),
    app.use('/media', express.static(__dirname + '/../public/media')),

],

module.exports = assets;