var http = require('http');
var fs = require('fs')
http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf-8');
  var message = "Hello node basic server";
  html = html.replace('{MESSAGE}' , message);
  res.end(html);
}).listen(3333, 'localhost');
