const bcrypt = require('bcrypt');
var string = 'xdddd';
bcrypt.hash(string, 10, function(err, hash) { //You can set 10 higher but expect longer hashing time
  console.log(hash);
bcrypt.compare(string, hash, function(err, res) {
  if(res) {
   console.log(string, 'hash verified');
  } else {
   console.log('nothing to verify');
  } 
});
});

/*
You could also do it like this:

const bcrypt = require('bcrypt');
bcrypt.hash(xdddd, 10, function(err, hash) { //You can set 10 higher but expect longer hashing time
  console.log(hash);
bcrypt.compare(xdddd, hash, function(err, res) {
  if(res) {
   console.log('hash verified');
  } else {
   console.log('nothing to verify');
  } 
});
});
*/