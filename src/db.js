const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
    .then(() => console.log(`database is connected`))
    .catch(err => console.log(err))


    module.exports = mongoose;