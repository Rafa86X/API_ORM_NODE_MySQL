/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index.js');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4000;
routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;