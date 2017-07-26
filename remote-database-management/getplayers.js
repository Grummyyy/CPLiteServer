const dateTime = new Date().getTime();
const timestamp = Math.floor(dateTime / 1000);
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

console.log('By Zaseth.');
console.log('Nothing is escaped here and this should only be used remotely and users are not able to have any kind of access or read anything.');

// Get players
connection.query("SELECT * FROM penguins", function (error, results, fields) {
	console.log(results);
  if (error) throw error;
});
module.exports = connection;
connection.end(); // End connection