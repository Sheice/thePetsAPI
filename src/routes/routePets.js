const { Router } = require("express")
const route = Router();

// import controllers
const {
    getPets,
    getPetForId
} =require('../controllers/controllers.Pets');

route.get('/', getPets);
route.get('/:petID', getPetForId)


module.exports = route;