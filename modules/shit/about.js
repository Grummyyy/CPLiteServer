var program = require('commander');
var ping = require('ping');


program
  .version('0.1.0')
  .command('get-about')
  .action(function () {
  	console.log('This is a Node.js based server that can run a CPPS for almost 90%');
  	console.log('This also loads the SWF files that come with the download (a complete AS2 mediaserver.)');
  	console.log('Xampp with MySQL and Kitsune running is the only external source that you need.');
  	console.log('There are handy packages included in this server that will help you out.');
});
program.parse(process.argv);