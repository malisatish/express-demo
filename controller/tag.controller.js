const { TagModel } = require('../models');
const { tagService } = require('../services');
const { handleSuccessOrErrorMessage, currentTimeStamp } = require('../helper/helper');
const { validationResult } = require('express-validator');

module.exports = {
    addTag: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let objData = req.body;
                objData.createdAt = currentTimeStamp();
                objData.updatedAt = currentTimeStamp();
                const result = await tagService.create(objData);
                handleSuccessOrErrorMessage(false, "New Tag added", res, result );
                }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    getTag: async (req, res) => {
        try{
            let query = {deletedAt: { $exists: false}};
            const result = await tagService.find(query);
            handleSuccessOrErrorMessage(false, "All tags data", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    updateTag: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let query = {_id: req.params.id};
                let objData = req.body;
                objData.updatedAt = currentTimeStamp();
                const result = await tagService.update(query, objData);
                handleSuccessOrErrorMessage(false, "Tag updated", res, result );
            }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    deleteTag: async (req, res) => {
        try{
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                let query = {_id: req.params.id};
                let objData = {};
                objData.deletedAt = currentTimeStamp();
                const result = await tagService.update(query, objData);
                handleSuccessOrErrorMessage(false, "Deleted tag data", res, result );
            }
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    }

}