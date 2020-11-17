/*jshint esversion: 10 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/app');
const router = require('./router');
const app = express();

const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => { 
  console.log(`Server running on port ${port}`)
});