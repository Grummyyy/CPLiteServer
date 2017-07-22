const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'xxddxxd');

let encrypted = '';
cipher.on('readable', () => {
  const data = cipher.read();
  if (data)
    encrypted += data.toString('hex');
});
cipher.on('end', () => {
  console.log(encrypted);
});

cipher.write('xdddd');
cipher.end();