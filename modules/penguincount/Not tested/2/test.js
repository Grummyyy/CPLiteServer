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
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C68686844-68685685-FHH5u6665',
    resave: true,
    saveUninitialized: true
}));

const usernameXD = 'root';
const passwordXD = 'root';

connection.connect(function(err) {
    if (err) throw err;
});
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
module.exports = connection;

app.get('/', function (req, res) {
  res.send("What do you want?");
    });

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "root" && req.session.admin)
    return next();
  else
    return res.status(401).send("Sorry! You can't see that.");
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');
  } else if(req.query.username === "root" || req.query.password === "root") {
    req.session.user = "root";
    req.session.admin = true;
    res.send("Welcome. Go to /stats");
  }
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("You have logged out.");
});

// Get content endpoint
app.get('/stats', auth, function (req, res) {
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
});

app.listen(3000);
console.log("app running at http://localhost:3000");
console.log('Your entire login token: http://localhost:3000/login?username='+ usernameXD + '&password=' + passwordXD);
