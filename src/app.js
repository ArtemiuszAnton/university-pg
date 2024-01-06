const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/user.controller');

const app = express();

app.use(bodyParser.json());
app.use('/users', route);

app.use((er, _req, res, _next) => {
  res.send(er.message);
});

module.exports = { app };
