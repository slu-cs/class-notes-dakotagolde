// Hello World web server
const express = require('express');

// Create the server
const app = express();

// Respond to one request
// cs-linuxlab-37.stlawu.edu:3000/
app.get('/', function(request, response){
  response.send('Hello Dakota');
});

// cs-linuxlab-37.stlawu.edu:3000/foo
app.get('/foo', function(request, response){
  response.send('Hello foo');
});

// cs-linuxlab-37.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response){
  response.send('Hello bar');
});

// cs-linuxlab-37.stlawu.edu:3000/zap/z     (for any z)
app.get('/zap/:z', function(request, response){
  response.send(`Hello ${request.params.z}`);
});

// cs-linuxlab-37.stlawu.edu:3000/zap?x=&y=
app.get('/zap', function(request, response){
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
