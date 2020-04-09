const express = require('express');
const router = express.Router();
const validator = require('../helper/validator');
const postCtrl = require('../controller/post.controller');
const tagCtrl = require('../controller/tag.controller');

router.get('/ping', (req,res,next)=>{
  res.send("pong");
});

//Post route
router.post('/post', validator.validate('post'), postCtrl.addPost);
router.get('/post', postCtrl.getPost);
router.put('/post/:id', validator.validate('updatePost'),postCtrl.updatePost);

//Tag route
router.post('/tag', tagCtrl.addTag);
router.get('/tag', tagCtrl.getTag);
router.delete('/tag/:id', tagCtrl.deleteTag);


router.all('*', (req, res) => {
  res.send(" No Route Found!")
});

module.exports = router;
