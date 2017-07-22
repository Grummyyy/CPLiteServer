var process = require('process');
var request = require('request');
var encryption = require('./modules/encryption.js');
var randomstring = require("randomstring");
console.log('Simple Passport.js Serial Generator');
console.log('I do not own the module');
console.log('Custom algo added, but commented out');
console.log('For custom algo use command: node gen.js encrypt message yourkey');
console.log(' ');
var gen1 = randomstring.generate({
    length: 25,
    charset: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%&*()'
  });
  console.log('Option 1: ' + gen1);
  var gen2 = randomstring.generate({
      length: 25,
      charset: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890'
  });
  console.log('Option 2: ' + gen2);
  var gen3 = randomstring.generate({
      length: 25,
      charset: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  });
  console.log('Option 3: ' + gen3);
  var gen4 = randomstring.generate({
      length: 25,
      charset: 'A@BCDE--'
  });
  console.log('Serial-Style: ' + gen4);
  // Custom charset and algo
  var program = require('commander');
  /*
  program
  .version('0.0.1');
  program
    .command("encrypt <message> <key>")
    .action(function (message, key) {
      console.log('Custom: ' + encryption.encryptString(message, key));
    });
  program
    .command("decrypt <message> <key>")
    .action(function (message, key) {
      console.log('Custom decrypt: ' + encryption.decryptString(message, key));
    });
  program.parse(process.argv);
*/

// This is set last so that if you just want to get normal keys, you can at least get them instead of an error
  program
  .version('0.0.1');
  program
  .command("encrypt <message>")
  .action(function (message) {
    console.log('Custom gen1: ' + encryption.encryptString(message, gen1));
    console.log('Custom gen2: ' + encryption.encryptString(message, gen2));
    console.log('Custom gen3: ' + encryption.encryptString(message, gen3));
  });
  program.parse(process.argv);