const {Schema, model} = require('mongoose');

const schemaTypePets = new Schema({
    type: String
},{
    versionKey: false
})

module.exports = model('Types', schemaTypePets);