
// deliver downloaded resources to a local file
// when done, print out 'Downloaded and saved n bytes to ./index.html


// use request library
// use fs to write to the filesystem
// use callback approach we've been working on
// NO PIPE
// no synchronous functions

const request = require('request');

const input = process.argv.slice(2);

const link = input.toString();

console.log(link);

request(link, function (error, response, body) {
  console.error('error', error); // print error if one occurs
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  
});