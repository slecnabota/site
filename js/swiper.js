const service = new Swiper("#serviceSwiper", {
  direction: "horizontal",
  loop: false,
  mousewheel: true,
  navigation: {
    nextEl: '#serviceNext', 
    prevEl: '#servicePrev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    370: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

const partner = new Swiper("#partnerSwiper", {
  direction: "horizontal",
  loop: true,
  mousewheel: true,
  speed: 800,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
const post = new Swiper("#postSwiper", {
  direction: "horizontal",
  loop: false,
  mousewheel: true,
  navigation: {
    nextEl: '#postNext', 
    prevEl: '#postPrev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    475: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
