$(document).ready(function () {
  $("a.btn").click(function () {
    $("#language-quiz").show();
  });

  $("button.btn").click(function (event) {
    event.preventDefault();
    const answer = $("#secret_question").val();
    console.log("thisismyanswer", answer)
    if (answer === 1) {
      $(".answer-wrapper#answer-1").show();
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
