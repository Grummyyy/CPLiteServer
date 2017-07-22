var program = require('commander');
var ping = require('ping');


program
  .version('0.1.0')
  .command('get-help')
  .action(function () {
  	console.log('Commands:');
  	console.log('get-about');
  	console.log('get-ping');
  	console.log('get-help');
  	console.log('get-modules');
});
program.parse(process.argv);