

var express = require('express');
var router = express.Router();
var r = require('rethinkdb');
var app = express();
var path = __dirname + '/public/';
var connection = null;

router.use(function (req,res,next) {
  
  console.log("/" + req.method);
  next();
});

router.get("/", function(req,res) {

  res.sendFile(path + "index.html");
  
});


//Our DB
router.get("/pis", function(req, res) {
//res.sendFile(path + "pis.html");
/*r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  r.db('NASA').table('peopleinspace').run(conn, function(err, res) {
    if(err) throw err;
    response.send(res);
    console.log(res);
   });

  });*/


r.connect( {host: 'localhost', port: 28015}, function(err,conn) {
  if(err) throw err;

  connection = conn;


r.db('jsondata').table('nobelprize')('prizes').nth(0).filter({category: "chemistry"}).limit(5).run(connection, function(err, cursor) {


  cursor.toArray(function(err, result) {
    if(err) throw err;
    
    
    res.setHeader('content-type', 'text/json');
    res.send(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
   });

  });

 });

});


app.use("/",router);
app.use(express.static('/var/www/html'));


/*app.get('/', function(req, res) {

	res.send("Hello Node, Express and BootStrap  World!!");

});*/

app.listen(3000);
