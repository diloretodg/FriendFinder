// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Sets up the Express App
// =============================================================

require("./app/routing/apiRouts")(app);
require("./app/routing/htmlRouts")(app);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
