// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');

// Console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Enter a filename: ', function(filename) {
  // console.log(filename);

  // File configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asynchonous line-by-line input
  file.on('line', function(line) {
    console.log(line);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});
