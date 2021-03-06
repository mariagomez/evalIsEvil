var express = require("express");
var fs = require("fs");

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
});

app.get('/qs', function(request, response) {
  fs.readFile('index2.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
});

app.get('/js', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send('<div id="toKeep"><p>Hello</p></div><script type="text/javascript">function foo() {alert("bar");}</script>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});