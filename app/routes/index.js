const express = require('express');
const router = express.Router();

const Roles = require('../models/rolesSchema');

router.get('/roles', function(req, res, next) {
  res.send("routes index.js represent!");
  res.render('home', {layout: 'default', template: 'home-template'});
});


// List all roles
router.get('/roles', function(req, res, next) {
  Roles.find()
        .then (doc => {res.json(doc)})
        .catch (err => {res.json({err})})
  res.send("routes index.js represent!");
  res.render('home', {layout: 'default', template: 'home-template'});
});



module.exports = router;