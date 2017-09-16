var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('load', { title: '你可以登陆啦 !' });
});
module.exports = router;
