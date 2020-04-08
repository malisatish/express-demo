const { User } = require('../models');
const { userService } = require('../services');
const { handleSuccessOrErrorMessage } = require('../helper/helper');

module.exports = {
    addUser: async (req, res) => {
        try{
            const result = await userService.create(req.body);
            handleSuccessOrErrorMessage(false, "New user added", res, result );
        }catch(err){
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }  
    },

    getUser: async (req, res) => {
        try{
            const result = await userService.find();
            console.log("getall user", result)
            handleSuccessOrErrorMessage(false, "All user lists", res, result );
        }catch(err){
            console.log("err", err)
            handleSuccessOrErrorMessage(true, `Error occured : ${err}`, res);
        }
    }
}