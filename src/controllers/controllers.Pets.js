const Ctrls = {}
// import module
const Pets = require('../models/Pets');

// get all pets

Ctrls.getPets = async (req, res) => {
    const petsFound = await Pets.find();
    res.json({pets: petsFound})
}

// get pets for id

Ctrls.getPetForId = async (req, res) => {
    const id = req.params.petID; 
    const petFound = await Pets.findById(id);
  
    res.json({pet: petFound})
} 




module.exports = Ctrls;