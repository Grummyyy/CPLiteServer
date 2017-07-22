var findInFiles = require('find-in-files');
console.log('Find any item in your crumbs');
console.log('I do not own this module');
console.log('Created by Zaseth');
console.log(' ');

findInFiles.find("Zeus", '.', '.txt$') // Finds 'Zeus' in every .txt file in the directory
.then(function(results) {
    for (var result in results) {
        var res = results[result];
        console.log(results); // Displays full line of the string that you searched
        console.log(
            'found "' + res.matches[0] + '" ' + res.count
            + ' times in "' + result + '"' // Displays count and in what file
        );
    }
  }); // End