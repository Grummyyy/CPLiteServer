const crypto = require('crypto');
const fs = require('fs');
const cipher = crypto.createCipher('aes192', 'a password');

const input = fs.createReadStream('out.js');
const output = fs.createWriteStream('out.enc');

input.pipe(cipher).pipe(output);