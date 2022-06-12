const roots21 = document.getElementById("roots21");
const roots22 = document.getElementById("roots22");
const URL = "/Activity/Newsletters/read";
roots21.addEventListener("click", () => {
  fetch(URL + "/roots21/");
});
roots22.addEventListener("click", () => {
  fetch(URL + "/roots22/");
});
