var program = require('commander');
var ping = require('ping');


program
  .version('0.1.0')
  .command('get-ping')
  .action(function (host, isAlive) {
  	console.log('Testing your connection...');
  	var hosts = ['google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});
});
program.parse(process.argv);