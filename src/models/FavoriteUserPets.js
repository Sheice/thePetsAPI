const {Schema, model} = require('mongoose');
const { schema } = require('./PetsTypes');

const schemaFavoriteUserPets = new Schema({
    // user: {
    //     ref: 'Users',
    //     // type: Schema.Types.ObjectId,
    //     required: true
    // },
    // pet: {
    //     ref: 'Pets',
    //     // type: Schema.Types.,
    //     required: true
    // }
});

module.exports = model('FavoriteUserPets', schemaFavoriteUserPets)