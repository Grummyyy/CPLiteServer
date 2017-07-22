var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'kitsune',
	//connectionLimit: 50,
	port: 3306 });

connection.connect(function(err) {
    if (err) throw err;
});
connection.query('SELECT 68 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('[MySQL test query] The solution is: ', results[0].solution);
});
module.exports = connection;
