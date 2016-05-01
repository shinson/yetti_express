var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Plugin = require('../models/plugin.js');

/* GET /plugins listing. */
router.get('/', function(req, res, next) {
  Plugin.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /user */
router.post('/', function(req, res, next) {
  Plugin.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;