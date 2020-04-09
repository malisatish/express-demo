const { body, query,param } = require('express-validator/check');

exports.validate = (method) => {
    console.log('validator', method)
    switch(method){
        case 'post': {
            return [
                body('title','Please enter title').exists({checkNull: true,checkFalsy: true}),
                body('body','Body data is required').exists({checkNull: true,checkFalsy: true}),
            ]
        }

        case 'updatePost': {
            return [
                body('title','Please enter title').exists({checkNull: true,checkFalsy: true}),
                body('body','Body data is required').exists({checkNull: true,checkFalsy: true}),
                param('id', 'post id is required').exists({checkNull: true,checkFalsy: true})
            ]
        }
    }
}