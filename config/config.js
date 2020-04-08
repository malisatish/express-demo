require('dotenv').config()

var env = process.env.NODE_ENV
// convert to uppercase
var envString = env.toUpperCase()
module.exports = {
    // access the environment variables for this environment
    DB_HOST: process.env['DB_HOST_' + envString],
    DB_USER: process.env['DB_USER_' + envString],
    DB_PASSWORD: process.env['DB_PASSWORD_' + envString],
    DB_NAME: process.env['DB_NAME_' + envString],
    DB_PORT: process.env['DB_PORT_'+ envString]
}
