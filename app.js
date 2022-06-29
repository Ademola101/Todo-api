const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI} = require('./utils/config');
const router = require('./route/todo')
const app = express();

console.log('connecting to', MONGODB_URI);

mongoose.connect(MONGODB_URI).then(() => {
  console.log('connected to db');
}).catch( err => console.log('error connecting to db', error.message));

app.use(express.json());
app.use(router);

module.exports = app