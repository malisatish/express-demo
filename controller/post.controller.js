const { postService } = require('../services');
const { PostModel } = require('../models');
const { handleSuccessOrErrorMessage, currentTimeStamp } = require('../helper/helper');
const { validationResult } = require('express-validator/check');

module.exports = {
    addPost: async (req, res) => {
        try{ 
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let objData = req.body;
                objData.createdAt = currentTimeStamp();
                objData.updatedAt = currentTimeStamp();
                const result = await postService.create(objData);
                handleSuccessOrErrorMessage(false, "New post added", res, result );
            }
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
    },
    
    updatePost: async(req, res) => {
        try{
            let objData = req.body;
            let query = { _id: req.params.postId};
            objData.updateAt = currentTimeStamp();
            const result = await postService.update(query, objData);
            console.log("updated result", result)
            handleSuccessOrErrorMessage(false, "Post updated", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    deletePost: async(req, res) => {

    }

}