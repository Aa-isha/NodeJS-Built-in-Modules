/*
 It allows you to read and process CSV data, automatically converting it into JavaScript objects or 
 arrays for further manipulation.
*/
// Examples;
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  
