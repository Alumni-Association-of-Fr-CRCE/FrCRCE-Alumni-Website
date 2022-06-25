var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

async function insertImages() {
  const data = await fetch("/api/gallery");
  const images = await data.json();
  for (let id in images) {
    let container = document.getElementById(id);
    let columns = container.querySelectorAll(".col");
    let col = 0;
    for (let i = 0; i < images[id].length; i++) {
      let image = document.createElement("img");
      image.setAttribute("src", images[id][i]);
      // image.loading = "lazy";
      // image.classList.add("lozad");
      columns[col].appendChild(image);
      col = col === 0 ? 1 : 0;
    }
  }
}

insertImages();

const lazyLoad = lozad();
lazyLoad.observe();

const content = document.querySelectorAll(".col");
const observer = new ResizeObserver((entries) => {
  let elem = entries[0];
  if (
    elem.target.parentNode.previousElementSibling.classList.contains("active")
  ) {
    elem.target.parentNode.style.maxHeight = elem.contentRect.height + "px";
  }
});

for (let i = 0; i < content.length; i++) {
  observer.observe(content[i]);
}
