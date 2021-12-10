// imports
const Pets = require('../models/Pets');
const petsTypes = require('../models/PetsTypes');
const fs = require('fs-extra');
const cloudinary = require('cloudinary');
const path = require('path');
const PetsTypes = require('../models/PetsTypes');

const Ctrls = {}


// config cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


// GET ALL PETS 

Ctrls.getPets = async (req, res) => {
    const petsFound = await Pets.find();
    res.json({pets: petsFound})
}

// GET PET FOR ID

Ctrls.getPetForId = async (req, res) => {
    const id = req.params.petID; 
    const petFound = await Pets.findById(id);
  
    res.json({pet: petFound})
} 

// CREATE PET
Ctrls.createPet = async (req, res)=> {
    const {type, name, age, description} = req.body;

    // find error
 
    if(!type) {
        return res.status(400).json({msg: 'Complete el campo "Tipo de Mascota"'})
    }

    if(!name){
        return res.status(400).json({msg: 'Complete el campo "Nombre de la mascota"'})
    }

    if(!description){
        return res.status(400).json({msg: 'Complete el campo "Descripción de la mascota"'})
    }

    if(!req.file) {
        return res.status(400).json({msg: 'Ingrese una imágen'})
    }

  
    if(req.file.size > 2000000){
        fs.unlink(req.file.path)
        return res.status(400).json({msg: 'Archivo muy pesado'})
    }

    // if the image is correct, create pet
    if(path.extname(req.file.originalname) === '.jpg' || path.extname(req.file.originalname) === '.jpeg' || path.extname(req.file.originalname) === '.png'){

        const typePetsFound = await PetsTypes.find({name: {$in: type}});
        if(typePetsFound.length === 0) {
            res.status(400).json({msg: 'Tipo de Mascota no encontrada'})
        }
        const typeMascot = typePetsFound.type;

        const image =  await cloudinary.v2.uploader.upload(req.file.path)

        // create pet

        const newPet = new Pets({
            type: typeMascot,
            name,
            age,
            description,
            imageUrl: image.url,
            imgIdPublic: image.public_id

        });

        const petAdded = await newPet.save();
        fs.unlink(req.file.path);

        return res.json({petAdded, msg:'Se agregó una mascota correctamente'});

    } else {
        fs.unlink(req.file.path)
        return res.status(400).json({msg: 'Extensión de la imágen inválida'});
    }

    
}


// UPDATE PET FOR ID

Ctrls.updatePetForId = async (req, res) => {
    const id = req.params.petID;
    const petUpdated = await Pets.findByIdAndUpdate(id, req.boy,{new: true});

    res.json({pet: petUpdated, msg: 'La mascota se actualizó correctamente'})
}

// DELETE PET FOR ID

Ctrls.deletePetForId = async (req, res) => {
    const id = req.params.petID;
    const petDeleted = await Pets.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(petDeleted.imgIdPublic)
    res.json({petDeleted, msg: 'Mascota eliminada Correctamente'});
}



module.exports = Ctrls;