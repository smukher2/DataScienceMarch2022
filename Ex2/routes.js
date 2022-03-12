/*
Author: Shradha Mukherjee
Date: 2022-03-10
Requests                                      Response
  localhost:3000                              "Welcome to homepage"
  localhost:3000/foo                          {“response”: “Hello”}
  localhost:3000/bar                          {“response”: “World”}
*/

//Define variables
/*Better to use 'let' or 'constant' instead of 'var'
to avoid confusing when setting variables. 'var' is more
flexible i.e. can be reassigned with wider scope
than 'let' and 'constant'.*/
let express = require('express');
let router = express.Router();

//Set server responses to /foo and /bar request routes
router.get('/foo', function(req, res){
  res.json({response: "Hello"});
  //res.send("Hello");
});

router.get('/bar', function(req, res){
  res.json({response: "World"});
  //res.send("World");
});

//Export the functionality
module.exports = router;
