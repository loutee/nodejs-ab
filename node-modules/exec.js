var exec = require('child_process').exec;
/*
exec('ls', function(err, stdout) {
  if (err) {
		throw err;
	}
	console.log('Listing finished');
	console.log(stdout);
});
*/

exec('git version', function(err, stdout) {
  if (err) {
		throw err;
	}
	console.log('Git Version Executed');
	console.log(stdout);
});

