var program = require('commander');
console.log('Simple node.js SQL query maker by Zaseth.');

const databaseName = 'kitsune';
const tableName = 'penguins';
const columnName = 'username';
const escape = 'mysql.escape(' + columnName + ')';
program
  .version('0.1.0')
.option('-s, --select', 'SELECT query')
.option('-w, --selectwhere', 'SELECT WHERE query')
  .parse(process.argv);
  console.log('Your settings: ' + 'database name: ' + databaseName + '|' + 'table name: ' + tableName + '|' + 'column name: ' + columnName + '|' + 'escape: ' + escape);
console.log('Your SQL query:');

if (program.select) console.log('SELECT * FROM ' + tableName);
if (program.selectwhere) console.log('"SELECT * FROM ' + tableName + ' WHERE ' + columnName + '=" + ' + escape + ';');
program.parse(process.argv);