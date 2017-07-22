var crypto = require('crypto');
var string = 'xddd';
var hash = crypto.createHash('sha256').update(string).digest('base64');
console.log(hash);