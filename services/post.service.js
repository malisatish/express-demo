const { PostModel } = require('../models');

const self = module.exports = {
    /* create new post */
    create: async (postData) => {
        return await PostModel.create(postData);
    },  

    find: async () => {
        return await PostModel.find();
    },

    findOne: async () => {
        
    },

    update: async () => {
        
    },
}