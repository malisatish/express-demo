const { PostModel } = require('../models');

const self = module.exports = {
    /* create new post */
    create: async (objData) => {
        return await PostModel.create(objData);
    },  

    find: async () => {
        return await PostModel.find();
    },

    findOne: async () => {
        
    },

    update: async (query = {}, objData = {}) => {
        return await PostModel.findOneAndUpdate(query, {$set: objData}, {new: true});
    },

    remove: async (query) => {
        return await PostModel.deleteOne(query);
    }
}