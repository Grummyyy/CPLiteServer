const fs = require('fs')
const http = require('http')
console.log('Made by Zaseth');
var url = 'http://rubycp.me/' // Set your URL

var file = fs.createWriteStream('file.json')
// Begin error handling
file.on('error', function(err) {
  console.log(err);
  file.end();
});
if (!url) {
  console.log('URL is empty.');
}
if (typeof url !== 'undefined' && url !== null){
// End error handling
http.get(url, response => {
  var result = []
  response
    .on('data', chunk => result.push(chunk))
    .on('end', () => {
      file.write(JSON.stringify(Buffer.concat(result).toString()))
    })
})
}