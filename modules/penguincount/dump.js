var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: 'root',
   database: 'kitsune'
});

connection.connect();

connection.query('SELECT Count(ID) AS NumberOfPenguins FROM Penguins;', function(err, results, fields) {
    if(err) throw err;

    fs.writeFile('usercount.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved registered penguins!');
    });

    connection.query('SELECT * FROM Penguins ORDER BY ID DESC LIMIT 1;', function(err, results, fields) {
    if(err) throw err;

    fs.writeFile('lastuser.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved last registered penguin!');
    });

        connection.query('SELECT * FROM Penguins;', function(err, results, fields) {
    if(err) throw err;

    fs.writeFile('registeredusers.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved penguins column!');
    });

    connection.end();
});
});
});