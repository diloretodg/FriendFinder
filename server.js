// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// var htmlRouts = require('./app/routing/htmlRouts.js');
// var apiRoutsRec = require('./app/routing/apiRouts.js');
// API Routs
// ============================================ //
var friends = require('./app/data/friends');
var friendsArr = friends.friendsArr;
console.log(friends.friendsArr)

app.get("/api/friends", function(req, res) {
  return res.json(friendsArr);
});

app.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;
  
  console.log(chosen);
  
  for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
          return res.json(friends[i]);
      }
  }
  
  return res.json(false);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;
  
  // Using a RegEx Pattern to remove spaces from newfriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
  console.log(newFriend);
  
  friends.push(newFriend);
  
  res.json(newFriend);
});
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname'./app/', "home.html"));
// });

// app.get("/survey", function(req, res) {
// res.sendFile(path.join('./app/', "survey.html"));
// });

// Sets up the Express App
// =============================================================
var friendsArr = [
  {
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ],
  },
]

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});