var exec = require('exec');

function getTime(adress) {
  
  exec(['i2cget', '-y', '0', '0x68', '0x02'], function(err, out, code) {
  if (err instanceof Error)
    throw err;
  
  var hour = out;

  exec(['i2cget', '-y', '0', '0x68', '0x01'], function(err, out, code) {
  if (err instanceof Error)
    throw err;

  var minuts = out;

    exec(['i2cget', '-y', '0', '0x68', '0x00'], function(err, out, code) {
  if (err instanceof Error)
    throw err;

  var seconds = out;

	process.stdout.write(hour);
        process.stdout.write(minuts);
        process.stdout.write(seconds);
	 process.exit(code);

  }


  }


  }

});
