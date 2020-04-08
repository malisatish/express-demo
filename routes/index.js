const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');
const postCtrl = require("../controller/post.controller");
const tagCtrl = require('../controller/tag.controller');

router.get('/ping', (req,res,next)=>{
  res.send("pong");
});
router.post('/api/user',userCtrl.addUser);
router.get('/api/user', userCtrl.getUser);

router.post('/api/post', postCtrl.addPost);
router.get('/api/post', postCtrl.getPost)

router.post('/api/tag', tagCtrl.addTag);
router.get('/api/tag', tagCtrl.getTag);


router.all('*', (req, res) => {
  res.send(" No Route Found!")
});

module.exports = router;
