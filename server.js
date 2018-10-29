// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// API Routs
// ============================================ //

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname +'/app/public', "home.html"));
});

app.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname +'/app/public', "survey.html"));
});

// $(document).on('click', 'submit', function(){
//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });
// })  
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
  {
    name:"Ahmed 2",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
      4,
      1,
      4,
      4,
      5,
      1,
      1,
      5,
      4,
      1
    ],
  },
]

require("./app/routing/apiRouts")(app);
require("./app/routing/htmlRouts")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
