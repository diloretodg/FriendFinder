// API Routs
// ============================================ //
var friends = require('../data/friends.js');
var friendsArr = friends.friendsArr;

var apiRouts = [
    
    // Displays all friends
    {friends : app.get("/api/friends", function(req, res) {
        return res.json(friendsArr);
    }),},
    
    
    // Displays a single friend, or returns false
    {
        friendSearch: app.get("/api/friends/:friend", function(req, res) {
            var chosen = req.params.friend;
            
            console.log(chosen);
            
            for (var i = 0; i < friends.length; i++) {
                if (chosen === friends[i].routeName) {
                    return res.json(friends[i]);
                }
            }
            
            return res.json(false);
        }),
    },
    
    // Create New Characters - takes in JSON input
    {
        friendCreate: app.post("/api/friends", function(req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            // This works because of our body parsing middleware
            var newFriend = req.body;
            
            // Using a RegEx Pattern to remove spaces from newfriend
            // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
            newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
            
            console.log(newFriend);
            
            friends.push(newFriend);
            
            res.json(newFriend);
        })
    }
]
module.exports = apiRouts;