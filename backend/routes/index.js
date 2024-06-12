var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', username : '홍길동'});
  //res.redirect("/prod")
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  //res.end()
  // const filepath = 'D:\upload\bb717f9368b51577f7b75108265f2323'
  // const filename = 'img.jpg'
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  // res.sendFile('filepath');
});
router.get('/prod', function(req, res, next) {
  let data = [ {no:1, name:'키보드', price:3000},
               {no:2, name:'마우스', price:5000},
               {no:3, name:'모니터', price:111000},
             ]
  res.render('productList', {list : data});
})

module.exports = router;
