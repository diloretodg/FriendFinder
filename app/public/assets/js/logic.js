// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	displayPlans();
	setupEventHandlers();
});

var survey = require('../data/survey');

function renderSurvey(){
    if($("#survey-questions")){
        for(var i = 0; i < survey.questions.length; i ++){
            
        }
    }
}

   $("#add-btn").on("click", function(event) {
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
function displayPlans() {
    // Send the GET request.
    $.get("/api/todos/").then(
        function(plans) {
            renderTemplate({plans: plans});
        }
    );
}

function renderTemplate(data) {
    var source = $("#page-template").text();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
}

function setupEventHandlers() {
    $(document).on("click", ".delplan", function(event) {
        // Get the ID from the button.
        // This is shorthand for $(this).attr("data-planid")
        var id = $(this).data("planid");

        // Send the DELETE request.
        $.ajax("/api/todos/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted id ", id);
                // Rerender the templates with the updated list
                displayPlans();
            }
        );
    });

    $(document).on("submit", "#sendSurvey", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // [name=plan] will find an element with a "name" attribute equal to the string "plan"
        var newPlan = {
            plan: $("#createplan [name=plan]").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/todos", {
            type: "POST",
            data: newPlan
        }).then(
            function() {
                console.log("created new plan");
                // Rerender the templates with the updated list
                displayPlans();
            }
        );
    });

    $(document).on("submit", "#updateplan", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        var id = $("[name=id]").val().trim();

        var updatedPlan = {
            plan: $("#updateplan [name=plan]").val().trim()
        };

        // Send the PUT request.
        $.ajax("/api/todos/" + id, {
            type: "PUT",
            data: updatedPlan
        }).then(
            function() {
                console.log("updated id ", id);
                // Rerender the templates with the updated list
                displayPlans();
            }
        );
    });
}
