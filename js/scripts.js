$(document).ready(function () {
  $(".answer-wrapper").hide();

  $("a.btn").click(function () {
    $("#language-quiz").show();
  });

  $("button.btn").click(function (event) {
    event.preventDefault();
    const answer = parseInt($("#secret_question").val());
    if (answer === 1) {
      console.log("answer");
      $("#answer-1").show();
    }
    else if (answer === 2) {
      $(".answer-wrapper#answer-2").show();
    }
    else if (answer === 3) {
      $("#answer-3").show();
    }
    else if (answer === 4) {
      $("#answer-4").show();
    }
    else if (answer === 5) {
      $("#answer-5").show();
    }

  });
});
