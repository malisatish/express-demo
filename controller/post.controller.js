const { postService } = require('../services');
const { PostModel } = require('../models');
const { handleSuccessOrErrorMessage, currentTimeStamp } = require('../helper/helper');
const { validationResult } = require('express-validator');

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
            let query = {deletedAt: { $exists: false}};
            const result = await postService.find(query);
            handleSuccessOrErrorMessage(false, "All post data", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },
    
    updatePost: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let objData = req.body;
                let query = { _id: req.params.id};
                objData.updateAt = currentTimeStamp();
                const result = await postService.update(query, { $set : objData});
                handleSuccessOrErrorMessage(false, "Post updated", res, result );
            }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    deletePost: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let query = {_id: req.params.id};
                const objData = {};
                objData.deletedAt = currentTimeStamp();
                const result = await postService.update(query, {$set: objData});
                handleSuccessOrErrorMessage(false, "Post deleted", res, result );
            }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    postVote: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let isVote = req.body.vote;
                if(isVote === true || isVote === false){
                    let query = {_id: req.params.id}; 
                    let instance = {};
                    instance.$inc = isVote ? { upVote: 1} : { downVote: 1};
                    instance.$set = { updateAt: currentTimeStamp()};
                    const result = await postService.update(query, instance);
                    handleSuccessOrErrorMessage(false, "Vote to post successfully", res, result );
                }else{
                    handleSuccessOrErrorMessage(false, "Vote value shoud be true or false", res);
                }
                
            }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    }

}