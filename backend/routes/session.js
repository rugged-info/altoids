var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/Users/Bart/Dropbox/A/altoids/typescript')
});

module.exports = router;
