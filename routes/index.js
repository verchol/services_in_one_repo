var express = require('express');
var router = express.Router();
var service1  = require('../service1/routes');
var service2  = require('../service2/routes');

router.use(service1);
router.use(service2);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
