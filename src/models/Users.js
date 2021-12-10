const {Schema, model} = require('mongoose');

const schemaUsers = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: [{
        ref: 'Role',
        type: Schema.Types.ObjectId,
        required: true
    }]
});

module.exports = model('Users', schemaUsers);