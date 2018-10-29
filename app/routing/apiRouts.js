// API Routs
// ============================================ //
var friends = require('../data/friends');

module.exports = function(app) {
    // API GET Requests
  
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArr);
    });

    app.get("/api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
        
        console.log(chosen);
        
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].name) {
                return res.json(friends[i]);
            }
        }
        
        return res.json(false);
    });
    // API POST Requests
  
    app.post("/api/friends", function(req, res) { 
        friendData.push(req.body);
        res.json(true);
    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
//     app.post("/api/clear", function(req, res) {
//       // Empty out the arrays of data
//       tableData.length = [];
//       waitListData.length = [];
  
//       res.json({ ok: true });
//     });
  };
