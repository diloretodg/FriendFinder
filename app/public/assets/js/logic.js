var survey = require('../data/survey');


console.log('click');

   $(document).on("click", '#addSurveyEntry', function(event) {
    event.preventDefault();
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#image_url").val().trim(),
      score: [
        $('#q1choice').val(),
        $('#q2choice').val(),
        $('#q3choice').val(),
        $('#q4choice').val(),
        $('#q5choice').val(),
        $('#q6choice').val(),
        $('#q7choice').val(),
        $('#q8choice').val(),
        $('#q9choice').val(),
        $('#q10choice').val(),
      ]
    };
    // Question: What does this code do??
    $.post("/api/friends", newFriend)
      .then(function(data) {
        console.log(data);
      });
  });

  $('#startSurvey').on('click', function(event) {
      event.preventDefault();

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
  })

