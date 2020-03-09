// Router for cake related requests
const express = require('express')

// Create the Router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'vanilla', flavor: 'Vanilla'},
  {id: 'chocolate', flavor: 'Chocolate'}
];

// cs-linuxlab-37.stlawu.edu:3000/cakes/
router.get('/:id', function(request, response, next) {

  // Pretend database lookup
  const cake = cakes.find(cake => cake.id === request.params.id);

  if (!cake) {
    next();   // Pass on this request
  } else {
      response.render('cakes/detail', {cake: cake})
  }
});

// cs-linuxlab-37.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next) {
  if (request.params.id === 'vanilla') {
    response.send('Vanilla cakes');
  } else if (request.params.id === 'chocolate') {
    response.send('Chocolate cakes');
  } else {
    next();   // Pass on this request
  }
});

module.exports = router;
