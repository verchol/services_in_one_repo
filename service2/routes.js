var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/service2/produce', function(req, res, next) {
  console.log('adding new items consumed added');
  res.render('index', { title: 'added item' });
});

module.exports = router;
