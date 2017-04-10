var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */



var obj= JSON.parse(fs.readFileSync('./inventors.json','utf8'));
//console.log(obj);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventors' , data:obj});
});

module.exports = router;
