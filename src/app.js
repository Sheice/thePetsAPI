// vars
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// config multer
const storage = multer.diskStorage({
    destination: path.join(__dirname + '/images/'),
    filename: function(req, file, cb){
        cb(null, uuidv4() + path.extname(file.originalname))
    }
})

// import routes
const pets = require('./routes/routePets');
const typePets = require('./routes/routeTypesPets');
const petsFavorites = require('./routes/routeFavoriteUserPets')

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(multer({
    storage
}).single('image'));

// routes
app.use('/api/pets', pets);
app.use('/api/types', typePets);
app.use('/api/favorites', petsFavorites);

module.exports = app;