var crypto = require('crypto');
var string = 'xdddddd';
var hash = crypto.createHash('sha1').update(string).digest('base64');
console.log(hash);