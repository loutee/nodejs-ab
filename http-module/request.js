var https = require('https');
var fs = require('fs');

var options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Tommy_Douglas',
  method: 'GET'
};

var req = https.request(options, function(res) {
  var responseBody = '';

  console.log('Response from server started.');
  console.log(`Server Status: ${res.statusCode} `);
  console.log('Response Headers: %j', res.headers);

  res.setEncoding('utf-8');
  res.once('data', function(chunk) {
    console.log(chunk);
  });

  res.on('data', function(chunk) {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on('end', function(err) {
    fs.writeFile('tommy-douglas.html', responseBody, function() {
      if (err) {
        throw err;
      } else {
        console.log('File Downloaded');
      }
    });
  });

});

req.on('error', function(err) {
  console.log(`problem wiht request: ${err.message}`);
});

req.end();
