const Ctrl = {};
// imports
const PetsTypes = require('../models/PetsTypes');

// get all type of pets
Ctrl.getTypePets = async (req, res) => {
    const typePetsFound = await PetsTypes.find();
    res.json({petsTypes: typePetsFound});
}

// create one type of pet
Ctrl.createTypePets = async (req, res) => {
    if(!req.body.type){
        return res.status(400).json({msg: 'El campo "Tipo de Mascota", no puede estar vacío'})
    }

    const newTypePet = new PetsTypes({
        type: req.body.type
    })

    const typePetAdded = await newTypePet.save();

    return res.json({newTypePet: typePetAdded, msg: 'Tipo de Mascota creado correctamente'});

}

module.exports = Ctrl;