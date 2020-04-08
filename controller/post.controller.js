const { postService } = require('../services');
const { PostModel } = require('../models');
const { handleSuccessOrErrorMessage } = require('../helper/helper');

module.exports = {
    addPost: async (req, res) => {
        try{
            const result = await postService.create(req.body);
            handleSuccessOrErrorMessage(false, "New post added", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    getPost: async (req, res) => {
        try{
            const result = await postService.find();
            handleSuccessOrErrorMessage(false, "All post data", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    }

}