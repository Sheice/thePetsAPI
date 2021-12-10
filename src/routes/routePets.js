const { Router } = require("express")
const route = Router();

// import controllers
const {getPets} =require('../controllers/controllers.Pets');

route.get('/', getPets);


module.exports = route;