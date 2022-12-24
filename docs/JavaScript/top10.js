
fetch("./Data/top10.json")
.then(function(response) {
  return response.json();
})
.then(function(top10) {
  for(let i = 0; i < top10.length; i++){
    content = `

    <div class='box alumni-profile'>
    <h2 class = 'alumni-name'>` + top10[i].name + `</h2>
    <p class='alumni-position'> ` + top10[i].position + `<br> ` + top10[i].company + `</p>
    <div class='alumni-details'>
      <p class='alumni-location'>
        <img src='Assets/Images/location-pin.png'> ` + top10[i].location + `
      </p>
    </div>
    <div class='bottom'>
      <a href= '` + top10[i].email + `'><img src='Assets/Images/email.png'></a>
      <a href='` + top10[i].linkedin + `'> <img src='Assets/Images/linkedin.png'></a>
    </div>
    </div>`;
    document.querySelectorAll(".col-lg-4")[i].innerHTML = content;
  }

  }
)
.catch(function(err) {
  console.log(err);
})

$("a").click(function () {
$("a").removeClass("active");
$(this).addClass("active");
});

$("#computer").on("mouseenter", function (){
$("a").removeClass("active");
$(".link-a").addClass("active");
});

$("#production").on("mouseenter", function (){
$("a").removeClass("active");
$(".link-b").addClass("active");
});

$("#electronics").on("mouseenter", function (){
$("a").removeClass("active");
$(".link-c").addClass("active");
});

$("#it").on("mouseenter", function (){
$("a").removeClass("active");
$(".link-d").addClass("active");
});