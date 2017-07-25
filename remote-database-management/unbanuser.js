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

var reason = 'being a fag.'; // Reason
const Commentname = 'You have been banned for: ' + reason; // Comment
const iduser = 273; // ID
const Playername = iduser; // Puts ID from iduser to Player in Bans
const moderator = 0;
const expiration = 4849;
const time = timestamp; // UNIX timestamp
const type = 1;

console.log('By Zaseth.');
console.log('Nothing is escaped here and this should only be used remotely and users are not able to have any kind of access or read anything.');

// Removes penguin out bans with ID declared in iduser
connection.query("DELETE FROM bans WHERE bans.ID =" + iduser, function (error, results, fields) {
	console.log('Unbanned ID: ' + iduser);
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Sets Banned to 0 in Penguins
connection.query("UPDATE penguins SET Banned = '0' WHERE penguins.ID =" + iduser, function (error, results, fields) {
    console.log('Unbanned ID: ' + iduser);
    console.log(JSON.stringify(results));
  if (error) throw error;
});

// Give unbanned user some coins because why not
connection.query("UPDATE penguins SET Coins = '800' WHERE penguins.ID =" + iduser, function (error, results, fields) {
    console.log('Added coins to ID: ' + iduser);
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