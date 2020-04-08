const { UserModel } = require('../models')

const self = module.exports = {
    /* Create new user */
    create: async (obj) => {
        return await UserModel.create(obj)
    },

    find: async () => {
        return await UserModel.find();
    }
}