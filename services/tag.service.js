const { TagModel } = require('../models')

const self = module.exports = {
    /* Create new user */
    create: async (obj) => {
        return await TagModel.create(obj)
    },

    find: async () => {
        return await TagModel.find();
    },

    remove: async (ObjectId) => {
        return await TagModel.deleteOne({ _id: ObjectId});
    }
}