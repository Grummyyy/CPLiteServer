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

console.log('Information about ID: ' + iduser);

// Checks if ID is banned
connection.query("SELECT GROUP_CONCAT(banned) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
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

// Get registrationdate
connection.query("SELECT GROUP_CONCAT(registrationdate) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get moderator
connection.query("SELECT GROUP_CONCAT(moderator) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get inventory
connection.query("SELECT GROUP_CONCAT(inventory) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get coins
connection.query("SELECT GROUP_CONCAT(coins) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get igloo
connection.query("SELECT GROUP_CONCAT(igloo) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get igloos
connection.query("SELECT GROUP_CONCAT(igloos) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get furniture
connection.query("SELECT GROUP_CONCAT(furniture) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get color
connection.query("SELECT GROUP_CONCAT(color) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get head
connection.query("SELECT GROUP_CONCAT(head) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get face
connection.query("SELECT GROUP_CONCAT(face) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get neck
connection.query("SELECT GROUP_CONCAT(neck) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get body
connection.query("SELECT GROUP_CONCAT(body) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get hand
connection.query("SELECT GROUP_CONCAT(hand) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get feet
connection.query("SELECT GROUP_CONCAT(feet) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get photo
connection.query("SELECT GROUP_CONCAT(photo) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get flag
connection.query("SELECT GROUP_CONCAT(flag) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get walking
connection.query("SELECT GROUP_CONCAT(walking) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get stamps
connection.query("SELECT GROUP_CONCAT(stamps) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get stampbook
connection.query("SELECT GROUP_CONCAT(stampbook) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get epf
connection.query("SELECT GROUP_CONCAT(epf) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get buddies
connection.query("SELECT GROUP_CONCAT(buddies) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get ignores
connection.query("SELECT GROUP_CONCAT(ignores) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});

// Get minutesplayed
connection.query("SELECT GROUP_CONCAT(minutesplayed) FROM penguins WHERE ID=" + iduser, function (error, results, fields) {
	console.log(JSON.stringify(results));
  if (error) throw error;
});
module.exports = connection;
connection.end(); // End connection