$(document).ready(function () {
  $(".btn").click(function () {
    $("#language-quiz").show();
  });

  $("language-quiz").submit(function (event) {
    const answer = parseInt($("secret_question").val());
  });

  if (answer === 1) {
    $("#answer-1").show();
  }
  event.preventDefault();
});