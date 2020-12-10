const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');

const path = require('path');

mongoose.connect('mongodb://localhost:27017/campingDB', { useNewUrlParser: true, useUnifiedTopology: true });