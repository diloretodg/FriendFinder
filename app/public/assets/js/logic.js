
$(document).on("click", '#addSurveyEntry', function(event) {
    console.log('click');
    event.preventDefault();
      // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

   // If all required fields are filled
   if (validateForm()) {
    var newFriend = {
      name: $("#name").val(),
      photo: $("#image_url").val(),
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
    }    // AJAX post the data to the friends API.
    $.post("/api/friends", newFriend, function(data) {

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // Show the modal with the best match
      $("#results-modal").modal("toggle");

    });
  } else {
    alert("Please fill out all fields before submitting!");
  };
    console.log(newFriend)
    $.post("../api/friends", newFriend)
      .then(function(data) {
        console.log(data);
      });
  });

  

  // $('#startSurvey').on('click', function(event) {
  //     event.preventDefault();

  //     app.get("/survey",'text/html', function(req, res) {
  //       res.sendFile(path.join(__dirname, "../public/survey.html/"));
  //       });
  // })

////////////////////////
// Chosen CSS
var config = {
  ".chosen-select": {},
  ".chosen-select-deselect": {
    allow_single_deselect: true
  },
  ".chosen-select-no-single": {
    disable_search_threshold: 10
  },
  ".chosen-select-no-results": {
    no_results_text: "Oops, nothing found!"
  },
  ".chosen-select-width": {
    width: "95%"
  }
};

for (var selector in config) {
  $(selector).chosen(config[selector]);
}

