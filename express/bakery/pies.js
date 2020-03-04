// Router for pie related requests
const express = require('express')

// Create the Router
const router = express.Router();

// cs-linuxlab-37.stlawu.edu:3000/cakes/
router.get('/', function(request, response) {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/pies/apple">Apple</a></li>
      <li><a href="/pies/cherry">Cherry</a></li>
    </ul>
    `);
});

// cs-linuxlab-37.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {
  if (request.params.id === 'apple') {
    response.send('Apple Pies');
  } else if (request.params.id === 'cherry') {
    response.send('Cherry pies');
  } else {
    next();   // Pass on this request
  }
});

module.exports = router;
