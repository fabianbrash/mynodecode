

var express = require('express');
var router = express.Router();

var app = express();
var path = __dirname + '/views/';

router.use(function (req,res,next) {

  console.log("/" + req.method);
  next();
});

router.get("/", function(req,res) {

  res.sendFile(path + "index.html");

});


app.use("/",router);

/* Lets server some static files i.e. .css, .jpeg, .js */


app.use(express.static('/var/www/html'));

/*app.get('/', function(req, res) {

        res.send("Hello Node, Express and BootStrap  World!!");

});*/

app.listen(3000);
