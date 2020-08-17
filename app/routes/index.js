const express = require('express');
const router = express.Router();

router.get('/roles', function(req, res, next) {
  res.send("routes index.js represent!");
  res.render('home', {layout: 'default', template: 'home-template'});
});



module.exports = router;