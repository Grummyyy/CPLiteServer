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
const newInventory = "%1%2%3"; // Items

console.log('By Zaseth.');
console.log('Nothing is escaped here and this should only be used remotely and users are not able to have any kind of access or read anything.');

    // Update inventory
    var updateQuery = "UPDATE `penguins` SET `Inventory` = ('" + newInventory + "') WHERE ID = " + iduser + ";"
    connection.query(updateQuery, function(error, results, fields) {;
    	console.log(updateQuery);
    	console.log(results);
    	//console.log(JSON.stringify(results));
      if (error) throw error;
    });
    module.exports = connection;
    connection.end(); // End connection