import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
const banner = new Swiper('.swiper-container', {
  speed: 500,
  spaceBetween: 190,
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


const notablealumni = new Swiper(".notable-alumni", {
  slidesPerView: $(window).width() < 600 ? 1 : 4,
  grabCursor: true,
  spaceBetween: 30,
  //mousewheel: true,
  speed: 500,
  direction: "horizontal",
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const newsletters = new Swiper(".newsletter-releases", {
  effect: "coverflow",
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    // depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

function resize() {
  if ($(window).width() < 600) {
    notablealumni.params.slidesPerView = 1;
  } else if ($(window).width() > 600 && $(window).width() < 900) {
    notablealumni.params.slidesPerView = 2;
  } else if ($(window).width() > 900 && $(window).width() < 1400) {
    notablealumni.params.slidesPerView = 3;
  } else {
    notablealumni.params.slidesPerView = 4;
  }
  notablealumni.update();
}

$(window).ready(resize);
$(window).on("resize", resize);

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
