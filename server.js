//dependencies
var express = require("express");

var bodyParser = require("body-parser");

//set up express app
var app = express ();
var PORT = process.env.PORT || 8080;


//link to html and api routes
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');

//set up express to handle the data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text);
app.use(bodyParser.json({type: 'application/vnd.api+json' }));

// Server Routing Map 
apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
htmlRoutes(app); // HTML route 


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  