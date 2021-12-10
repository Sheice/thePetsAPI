// vars
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// import routes

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes

module.exports = app;