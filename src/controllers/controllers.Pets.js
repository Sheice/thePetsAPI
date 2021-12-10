const Ctrls = {}
// import module
const Pets = require('../models/Pets');

Ctrls.getPets = async (req, res) => {
    const petsFound = await Pets.find();
    res.json({pets: petsFound})
}


module.exports = Ctrls;