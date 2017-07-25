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

const iduser = 273; // ID

console.log('By Zaseth.');
console.log('Nothing is escaped here and this should only be used remotely and users are not able to have any kind of access or read anything.');

// Checks if ID is banned
connection.query("SELECT GROUP_CONCAT(banned) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log('1 = Banned');
	console.log('0 = Not banned');
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get username
connection.query("SELECT GROUP_CONCAT(username) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get email
connection.query("SELECT GROUP_CONCAT(email) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get password
connection.query("SELECT GROUP_CONCAT(password) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});
module.exports = connection;
connection.end(); // End connection