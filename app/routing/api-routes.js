var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log(friends);
  });
  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    console.log(req.body);
    //parse the survey post
    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores);
//diff btw ea user
    var totalDifference = 0;
    //have to do a nested for loop
    //loop for all friends

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;
      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        if (totalDifference <= bestMatch.friendDifference) {
          //reset match to new friend
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }

    }
    friends.push(userData);
res.json(bestMatch);
  });
}





