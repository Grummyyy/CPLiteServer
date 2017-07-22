var crypto = require('crypto');
var string = 'xdddddd';
var hash = crypto.createHash('md5').update(string).digest('base64');
console.log(hash);