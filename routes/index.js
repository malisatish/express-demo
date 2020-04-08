const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');
const postCtrl = require("../controller/post.controller");
const tagCtrl = require('../controller/tag.controller');

router.get('/ping', (req,res,next)=>{
  res.send("pong");
});
router.post('/user',userCtrl.addUser);
router.get('/user', userCtrl.getUser);

router.post('/post', postCtrl.addPost);
router.get('/post', postCtrl.getPost)

router.post('/tag', tagCtrl.addTag);
router.get('/tag', tagCtrl.getTag);


router.all('*', (req, res) => {
  res.send(" No Route Found!")
});

module.exports = router;
