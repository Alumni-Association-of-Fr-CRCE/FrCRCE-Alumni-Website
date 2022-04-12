$(document).ready(function () {
  fetch("/Html/Components/navbar.html")
    .then((response) => response.text())
    .then((navbar) => $(".page-container").prepend(navbar));
  fetch("/Html/Components/footer.html")
    .then((response) => response.text())
    .then((footer) => $("body").append(footer));
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
