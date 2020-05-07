const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);

const link = input[0].toString();
const filePath = input[1].toString();

console.log(`Calling ${link} >> Requesting info to write to file.`);

request(link, function(error, response, body) {

  if (error) {
    throw 'Sorry about that' + error;
  }
  if (response.statusCode !== 200) {
    throw "That's not what I expected to happen, something went wrong. The server says: " + response.statusCode + "\n I didn't write anything to file";
  }
  
  console.log('statusCode:', response && response.statusCode);
    
  const writing = fs.writeFile(filePath, body, () => {
    let stats = fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      console.log(`All done! Written ${stats.size} bytes to file!`);
    });
  });
});