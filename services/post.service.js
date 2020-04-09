const { PostModel } = require('../models');

const self = module.exports = {
    /* create new post */
    create: async (objData) => {
        return await PostModel.create(objData);
    },  

    find: async (query = {}, extraOptions = {}) => {
        return await PostModel.find(query, extraOptions);
    },

    findOne: async () => {
        
    },

    update: async (query = {}, instance = {}) => {
        return await PostModel.findOneAndUpdate(query, instance);
    },

    remove: async (query) => {
        return await PostModel.deleteOne(query);
    }
}