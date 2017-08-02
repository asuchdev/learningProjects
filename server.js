var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('readClock.html');

http.createServer(function (req, res) {
  console.log("serving clock now!!");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index);
  res.end();
}).listen(4000);

