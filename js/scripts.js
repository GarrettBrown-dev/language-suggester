$(document).ready(function () {
  $(".btn").click(function () {
    $("#language-quiz").show();
  });

  $("language-quiz").submit(function (event) {
    const answer = parseInt($("secret_question").val());
  });

  if (value === "1") {
    $("#answer-1").show();
  }
  if (value === "2") {
    $("#answer-2").show();
  }
  if (value === "3") {
    $("#answer-3").show();
  }
  if (value === "4") {
    $("#answer-4").show();
  }
  if (value === "5") {
    $("#answer-5").show();
  }
  event.preventDefault();
});