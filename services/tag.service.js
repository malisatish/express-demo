const { TagModel } = require('../models')

const self = module.exports = {
    /* Create new user */
    create: async (objData) => {
        return await TagModel.create(objData);
    },

    find: async (query = {}, extraOptions = {}) => {
        return await TagModel.find(query, extraOptions);
    },

    update: async (query = {}, objData = {}) => {
        return await TagModel.findOneAndUpdate(query, { $set: objData});
    },

    remove: async (query) => {
        return await TagModel.deleteOne(query);
    }
}