function spotlight(data) {
  const spotlightContainer = document.getElementById("spotlightContainer");
  //Data
  let YTUrl = data.YTUrl;
  let name = data.name;
  let batch = data.batch;
  let description = data.description;
  //DOM Elements
  let spotlight = document.createElement("div");
  let videoframe = document.createElement("IFRAME");
  let main = document.createElement("div");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  //Set Attributes
  spotlight.className = "spotlight";
  videoframe.className = "video";
  videoframe.src = YTUrl;
  videoframe.title = "YouTube video player";
  videoframe.setAttribute("frameborder", "0");
  videoframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  videoframe.allowFullscreen = true;
  main.className = "description";
  h3.className = "name";
  h3.innerText = name;
  h4.className = "batch";
  h4.innerText = batch;
  p.innerText = description;
  main.appendChild(h3);
  main.appendChild(h4);
  main.appendChild(p);
  spotlight.appendChild(videoframe);
  spotlight.appendChild(main);
  //Append to document
  spotlightContainer.appendChild(spotlight);
}

async function addSpotlights() {
  const res = await fetch("/api/spotlights");
  const data = await res.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) spotlight(data[i]);
}

addSpotlights();
