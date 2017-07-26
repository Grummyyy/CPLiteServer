var program = require('commander');
console.log('Simple node.js SQL query maker by Zaseth.');
console.log('-h for help');
const databaseName = 'kitsune';
const tableName = 'penguins';
const columnName = 'username';
const escape = 'mysql.escape(' + columnName + ')';
const columnSET = 'Faggoterino';
const tableData = 'ID';
const tableValue = 273;
var breakLine = "\r\n";

program
  .version('0.1.0')
.option('-s, --select', 'SELECT query')
.option('-w, --selectwhere', 'SELECT WHERE query')
.option('-u, --update', 'Update sql query')
  .parse(process.argv);
  console.log('Your settings: ' + 'database name: ' + databaseName + '|' + 'table name: ' + tableName + '|' + 'column name: ' + columnName + '|' + 'escape: ' + escape);
console.log('Your SQL query:');

if (program.select) console.log('SELECT * FROM ' + tableName);
if (program.selectwhere) console.log('"SELECT * FROM ' + tableName + ' WHERE ' + columnName + '=" + ' + escape + ';');
if (program.update) console.log("UPDATE " + tableName + ' SET ' + columnName + ' = ' + "'" + columnSET + "'"  + ' WHERE ' + tableName + '.' + tableData + ' = ' + tableValue);
program.parse(process.argv);