const bodyParser = require('express');
const funcionarioRouter = require('./funcionarioRoute.js');
const comandasRouter = require('./comandas.js');
const login = require('./login.js');
const bemVindo = require('./bemVindo.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        bemVindo,
        login,
        funcionarioRouter,
        comandasRouter
    );     
};

