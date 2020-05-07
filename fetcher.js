
// deliver downloaded resources to a local file
// when done, print out 'Downloaded and saved n bytes to ./index.html


// use request library
// use fs to write to the filesystem
// use callback approach we've been working on
// NO PIPE
// no synchronous functions

const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);

const link = input[0].toString();
const filePath = input[1].toString();


request(link, function (error, response, body) {

  console.error('error', error); // print error if one occurs
  console.log('statusCode:', response && response.statusCode);
  console.log(`Calling for ${link} >> to write body to file.`);
    
  const writing = fs.writeFile(filePath, body, (cb) => {
    let stats = fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      console.log(`All done! Written ${stats.size} bytes to file!`);
    });
  });
  
});