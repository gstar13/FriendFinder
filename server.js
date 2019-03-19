//dependencies
var express = require("express");
//set up express app
var app = express ();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//set up express to handle the data parsing


//create application/url parser
app.use(bodyParser.urlencoded({extended: true }));
 
//parse different custom json types as json
app.use(bodyParser.json({type: 'application/**json'}))

//parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type' }))

//parse html body into a string
app.use(bodyParser.text({type: 'text/html'}))
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  