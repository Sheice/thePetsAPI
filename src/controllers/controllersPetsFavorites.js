const Ctrl = {};
// imports
const FavoriteUserPets = require('../models/FavoriteUserPets');

Ctrl.getPetsFavorites = (req, res) => {
    const id = req.body.userID;
    if(!id){
        return res.status(400).json({msg: `Ingrese el ID del usuario`})
    }
   

}

module.exports = Ctrl;