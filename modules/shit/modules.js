var program = require('commander');
var ping = require('ping');


program
  .version('0.1.0')
  .command('get-modules')
  .action(function () {
console.log('Modules:');
console.log('[*] /admin/ troll');
console.log('[*] /phpmyadmin/ troll');
console.log('[*] Auto crossdomain.xml converter');
console.log('[*] Updated cookies.js on /play/ (Needs editing on domain_str)');
console.log('[*] Entire mediaserver added');
console.log('[*] Trust proxy (No spoofing possible)');
console.log('[*] IP blacklist, whitelist and ranges');
console.log('[*] socket.io added with custom 404 message'); // To edit that message, go to: Server\node_modules\socket.io\lib\index.js and then look for ''res.writeHead''
console.log('[*] Users online added in index');
console.log('[*] Made socket.io compatible with express');
console.log('[*] Status page added');
console.log('[*] robots.txt added');
console.log('[*] MySQL added');
console.log('[*] Firewall added');
console.log('[*] Preinstalled with a full HTML theme');
});
program.parse(process.argv);