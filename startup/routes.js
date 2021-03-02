const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const register = require('../routes/register');
const login = require('../routes/login');
const home = require('../routes/home');
const song = require('../routes/song');

module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.json());

    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.use(cookieParser());

    app.use('/register', register);
    app.use('/login', login);
    app.use('/', home);
    app.use('/song', song);

}