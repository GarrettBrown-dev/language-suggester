$(document).ready(function () {
  $(".btn").click(function () {
    $("#language-quiz").show();
  });

  $("language-quiz").submit(function (event) {
    const answer = ($("secret_question").val());

    let result;
    if (value === 1) {
      $("#answer-1").show();
    }
    else if (value === 2) {
      $("#answer-2").show();
    }
    else if (value === 3) {
      $("#answer-3").show();
    }
    else if (value === 4) {
      $("#answer-4").show();
    }
    else if (value === 5) {
      $("#answer-5").show();
    }
    event.preventDefault();
  });
});
