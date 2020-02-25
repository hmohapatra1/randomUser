/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

const config = require('./config');
const router = require('./app/routes/endPoints');

const port = process.env.PORT || 3000;

mongoose.connect(config.database.db, (err) => {
  if (err) {
    console.log('Error in connecting database : ' + config.database.db + ' Error: ' + err);
    // res.send(500, {err: err});
  } else {
    console.log('MY DATABASE IS CONNECTED'+config.database.db);
  }
});

app.set('superSecret', config.database.mySecret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api', router);

app.listen(port);

console.log('Server running on port: ' + port);
