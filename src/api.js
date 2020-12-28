const express = require('express');
const serverless = require('serverless-http');
const Posts = require('../models/Poster');
require('./mongoose');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  Posts.find({})
    .then((Posts) => {
      res.send(Posts);
    })
    .catch((e) => {});
});

router.get('/:id', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) return res.status(404).send();
    res.send(post);
  } catch (error) {}
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
