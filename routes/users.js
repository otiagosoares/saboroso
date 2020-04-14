var express = require('express');
var router = express.Router();

var db = require('../inc/db')

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.query('SELECT * FROM tb_users', (err, results) => {

    if(err){res.send(err)}

    res.send(results);
  })
  
});

module.exports = router;
