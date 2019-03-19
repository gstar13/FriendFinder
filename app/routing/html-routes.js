var path = require("path");

console.log('you have reached the htmlRoutes page');
 
//routes--
function htmlRoutes(app) {
//a get route to get to the /survey which will display the survey page
app.get('/survey', function(req,res){
    res.sendFile(path.join(_dirname + '/../public/survey.html'));
});

//USE route to get back to the home.html page
app.use(function(req, res) {
    res.sendFile(path.join(_dirname + '/../public/home.html'));
});
}
//export to use in  server.js
module.exports = htmlRoutes;
