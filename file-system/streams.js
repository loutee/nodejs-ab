var fs = require('fs');

// fs.readFile('./chat.log', 'utf-8', function(err, chatlog) {
//   console.log(`File Read ${chatlog.length}`);
// });
//
// console.log('Reading File');

var stream = fs.createReadStream('./chat.log', 'utf-8');

var data = '';

stream.once('data', function() {
  console.log('\n\n\n');
  console.log('Started Reading File');
  console.log('\n\n\n');
});

stream.on('data', function(chunk) {

  process.stdout.write(`  chunk: ${chunk.length} |`);
  data += chunk;

});

stream.on('end', function() {
  console.log('\n\n\n');
  console.log(`Finished Reading File ${data.length}`);
  console.log('\n\n\n');
});
