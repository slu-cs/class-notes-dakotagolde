// Hello World web server
const express = require('express');

// Create the server
const app = express();

// Respond to one request
app.get('/', function(request, response){
  response.send('Hello Dakota');
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
