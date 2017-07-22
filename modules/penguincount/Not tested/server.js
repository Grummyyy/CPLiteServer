var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'kitsune'
});

http.createServer(function (request, response) 
{ 
            var countQuery = connection.query('SELECT Count(ID) AS NumberOfPenguins FROM Penguins',[1], function(err, rows, fields)
            {
                response.writeHead(200, { 'Content-Type': 'application/json'});
                app.disable('x-powered-by');
                response.end(JSON.stringify(rows));
                response.end();
                });
            var countQuery = connection.query('SELECT * FROM Penguins ORDER BY ID DESC LIMIT 1',[1], function(err, rows, fields)
            {
                response.writeHead(200, { 'Content-Type': 'application/json'});
                app.disable('x-powered-by');
                console.log('Last registered user: ' + (JSON.stringify(rows)));
                response.end();
                });
}).listen(8084);