var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'kitsune',
    connectionLimit: 50,
    port: 3306 });

connection.connect(function(err) {
    if (err) throw err;
});
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
module.exports = connection;

http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('index.html', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }
    var countQuery = "SELECT Count(ID) AS NumberOfPenguins FROM Penguins"; console.log(countQuery);
connection.query(countQuery, function(err, rows) {
  if (err) throw err;

    var renderedHtml = ejs.render(content, {countQuery: JSON.stringify(rows)});
    res.end(renderedHtml);
  });
});
}).listen(80);
