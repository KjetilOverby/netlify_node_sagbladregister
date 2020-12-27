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
  //   res.json({
  //     Hello: 'world',
  //   });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
