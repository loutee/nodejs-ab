// jshint esnext: true

// npm install -g node-dev
// npm install -g jshint

var http = require('http');

http.createServer(function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Web Server</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  `);
}).listen(3000);

console.log('Server running http://localhost:3000');
