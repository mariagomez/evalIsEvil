var express = require("express");

var app = express();
app.use(express.logger());

app.get('/js', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.send('alert("Hello World!");');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});