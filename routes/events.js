var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../models/Event.js');


/* GET /events listing. */
router.get('/', function(req, res, next) {
  Event.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
});

/* POST /user */
router.post('/', function(req, res, next) {
  Event.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;