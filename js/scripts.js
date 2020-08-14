$(document).ready(function () {
  $(".btn").click(function () {
    $("#language-quiz").show();
  });

  $("language-quiz").submit(function (event) {
    const answer = parseInt($("secret_question").val());
  });
});