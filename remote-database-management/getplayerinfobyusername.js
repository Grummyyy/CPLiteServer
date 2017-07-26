var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'kitsune',
    port: 3306 });

connection.connect(function(err) {
    if (err) throw err;
});

const usernamePenguin = 'jgfjjg';

var playerGet = "SELECT GROUP_CONCAT(password) FROM penguins WHERE username= " + mysql.escape(usernamePenguin);
console.log(playerGet);
connection.query(playerGet, function(error, results, fields) {
    console.log(results);
if (!usernamePenguin.length) {
	console.log('No username filled in.');
} else {
	if (error) throw error;
}
});
module.exports = connection;
connection.end(); // End connection