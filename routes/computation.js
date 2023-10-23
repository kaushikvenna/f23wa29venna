var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    x=req.query.x;
    if(x==undefined)
    x=(Math.random()*100);
    fnc1=Math.sin(x);
    fnc2=Math.abs(x);
    fnc3=Math.acos(x);
  
  res.send(`sin of ${x} is ${fnc1},absolute of ${x} is ${fnc2} and acos of ${x} is ${fnc3} `);
  
});

module.exports = router;
