const { Router } = require("express")
const route = Router();

// import controllers
const {
    getPets,
    getPetForId,
    updatePetForId,
    deletePetForId,
    createPet
} =require('../controllers/controllers.Pets');


route.get('/', getPets);
route.get('/:petID', getPetForId);

route.post('/create', createPet);

route.put('/:petID',updatePetForId);

route.delete('/:petID', deletePetForId)


module.exports = route;