$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) $("nav").addClass("main");
  else $("nav").removeClass("main");
});
