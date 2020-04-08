
var config = require('../config/config')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
async function connect() {
 
    const host = config.DB_HOST;
    const db = config.DB_NAME;
    const port = config.DB_PORT;
    const user = config.DB_USER;
    const pass = config.DB_PASSWORD;
   return mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${db}`, {useNewUrlParser: true})
    .then(
        (connection) => {
            console.log(`Connected to MongoDB`)
        },
        err => {
            console.log(err);
        }
    );
}

module.exports = {
    connect
};