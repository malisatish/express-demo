const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;