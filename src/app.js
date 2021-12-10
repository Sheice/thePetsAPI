// vars
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// import routes
const pets = require('./routes/routePets');

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/pets', pets);

module.exports = app;