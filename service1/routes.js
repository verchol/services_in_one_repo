var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service1/consume', function(req, res, next) {
  console.log('item consumed added');
  res.render('index', { title: 'conumed item' });
});

module.exports = router;
