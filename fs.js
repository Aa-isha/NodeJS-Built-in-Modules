/* 
 this module provides an API for interacting with the file system in a Node.js application
 It offers functions for reading and writing files, creating and removing directories, and more.
*/

// Example;
const fs = require('fs');

fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('/path/to/new-file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
