// $(window).scroll(function () {
//   if ($(this).scrollTop() >= 50) $("nav").addClass("main");
//   else $("nav").removeClass("main");
// });

$(window).scroll(function () {
  var top_of_element = $(".head-nav").offset().top;
  var bottom_of_element =
    $(".head-nav").offset().top + $(".head-nav").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    $("nav").removeClass("main");
  } else {
    $("nav").addClass("main");
  }
});
