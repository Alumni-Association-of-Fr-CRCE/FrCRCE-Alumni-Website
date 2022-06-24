function createAlumniCard(data) {
  return `<div class="swiper-slide">
            <img
              loading="lazy"
              src="${data["img"]}"
              alt="Mr. Mihir Karkare"
            />
            <h3>${data["name"]}</h3>
            <p>${data["batch"]}</p>
          </div>`;
}

async function loadAlumni() {
  const res = await fetch("/api/alumni");
  const alumni = await res.json();
  let container = document.getElementById("notablealumni");
  for (let i = 0; i < alumni.length; i++)
    container.insertAdjacentHTML("beforeend", createAlumniCard(alumni[i]));
}

loadAlumni();
