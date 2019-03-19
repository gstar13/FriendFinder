var path = require("path");

console.log('you have reached the htmlRoutes page');
 //export to use in  server.js
module.exports = function (app){
  app.get("/survey", function(req,res){
      res.sendFile(path.join( __dirname + "/../public/survey.html"));
  });
  app.use(function(req,res) {
      res.sendFile(path.join( __dirname + "/../public/home.html"));
  });

}


