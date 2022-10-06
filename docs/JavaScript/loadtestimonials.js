function createTestimonial(data) {
  return `<div class="testimonial">
        <div class="details">
            <img src="${data["img"]}" alt="${data["name"]}" width="90" height="90" />
            <div class="profile">
                <h3 class="name">${data["name"]}</h3>
                <p class="batch">${data["batch"]}</p>
            </div>
        </div>
        <div class="quote">
            <span>“</span>
            <p>${data["text"]}</p>
        </div>
    </div>`;
}

async function loadTestimonials() {
  const res = await fetch("/api/testimonials");
  const testimonials = await res.json();
  for (key in testimonials) {
    console.log(key);
    let container = document.getElementById(key);
    for (let i = 0; i < testimonials[key].length; i++)
      container.insertAdjacentHTML(
        "beforeend",
        createTestimonial(testimonials[key][i])
      );
  }
}

loadTestimonials();
