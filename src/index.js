require('dotenv').config();
const app = require('./app');
require('./db');

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})