const {Schema, model} = require('mongoose');

const SchemaPets = new Schema({
    type: {
        ref: 'Types',
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {type: String, required: true},
    age: {type: Number},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    imgIdPublic: {type: String, required: true}
});

module.exports = model('Pets', SchemaPets);