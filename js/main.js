$(document).ready(function() {
  // Trigger mobile side-nav when .button-collapse is clicked
  $(".button-collapse").sideNav();

  var one_second = 1000;
  var transition = 1100;

  for (var i = 0; i <= 10; i++) {
    $(".fade-in-" + i).delay(i * one_second).fadeIn(transition);
  }
});
