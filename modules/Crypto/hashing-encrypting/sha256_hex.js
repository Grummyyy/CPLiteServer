var crypto = require('crypto');
var string = 'xddd';
var hash = crypto.createHash('sha256').update(string).digest('hex');
console.log(hash);