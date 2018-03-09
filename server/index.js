const express = require('express');
const body = require('body-parser');

require('babel-register');
require('./database');
require('./database/setup');

const app = express();
const PORT = 3000;


app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.listen(PORT, () => console.log('Cloner server is listening on port:', PORT));