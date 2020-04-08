const { TagModel } = require('../models');
const { tagService } = require('../services');
const { handleSuccessOrErrorMessage } = require('../helper/helper');

module.exports = {
    addTag: async (req, res) => {
        try{
            const result = await tagService.create(req.body);
            handleSuccessOrErrorMessage(false, "New Tag added", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    },

    getTag: async (req, res) => {
        try{
            const result = await tagService.find()
            handleSuccessOrErrorMessage(false, "All tags data", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    }
}