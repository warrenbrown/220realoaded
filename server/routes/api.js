const express = require('express')
const router = express.Router();
const Post = require('../models/post')

router.get('/', (req, res) =>
{
  res.send('api works')
});

router.get('/posts', (req, res) => {
  console.log('get requests for all posts');
  Post.find({}, function(err, posts) {
    if (err) {
      console.log('error retrieving posts')
    } else {
      res.json(posts)
    }
  });
});

router.post('/post', (req, res) => {
  console.log('create a post');
  var newPost = new Post();
  newPost.title = req.body.title;
  newPost.body = req.body.body;
  newPost.save(function(err, post) {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json(post);
    }
  });
});

router.get('/post/:id', (req, res) => {
  console.log('get a post by id');
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json(post)
    }
  });
});

router.put('/post/:id', (req, res) => {
  console.log('get a post by id');
  Post.findByIdAndUpdate(req.params.id,
    {
      $set: { title: req.body.title, body: req.body.body }
    },

    {
      new: true
    },
    function(err, post) {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json(post)
    }
  });
});

router.delete('/post/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json(post);
    }
  });
});

module.exports = router;
