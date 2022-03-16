/*
Author: Shradha Mukherjee
Date: 2022-03-10
Requests                                      Response
  localhost:3000                              "This is homepage"
  localhost:3000/foo                          {“response”: “Hello”}
  localhost:3000/bar                          {“response”: “World”}
*/

//Syntax ;
/*The ; at end of statements in javascript(js) is optional though some require it
but js not strict enough to complain about it. Its good practice to have ;
makes code more organized and clean. Python is another
language does not need ; but Java and PHP are languages that do need ; */

//Define variables and default values
/*Better to use 'let' or 'constant' instead of 'var'
to avoid confusing when setting variables. 'var' is more
flexible i.e. can be reassigned with wider scope
than 'let' and 'constant'.*/
let express = require('express');
let Ex2App = express();
let port = process.env.PORT || 3333;
let BASE_URL = process.env.BASE_URL || "";
let Ex2Routes = require('./routes.js');

//Start server
Ex2App.listen(port, function() {
  console.log("Server is listening on PORT " + port);
})

//Set server responses to requests in front or homepage
Ex2App.get(BASE_URL, function(req, res){
  res.send("Welcome to homepage");
})

//Set server responses to requests in route.js
Ex2App.use(BASE_URL, Ex2Routes);
