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
router.put('/post/:id', validator.validate('updatePost'), postCtrl.updatePost);
router.delete('/post/:id', validator.validate('deletePost'), postCtrl.deletePost);
router.put('/post/:id/vote', validator.validate('vote'), postCtrl.postVote);


//Tag route
router.post('/tag', validator.validate('tag'), tagCtrl.addTag);
router.get('/tag', tagCtrl.getTag);
router.put('/tag/:id', validator.validate('updateTag'), tagCtrl.updateTag)
router.delete('/tag/:id', validator.validate('deleteTag'), tagCtrl.deleteTag);


router.all('*', (req, res) => {
  res.send(" No Route Found!")
});

module.exports = router;
