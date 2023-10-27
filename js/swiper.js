const team = new Swiper('#teamSwiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '#teamPagination',
      clickable: true,
    },
    breakpoints:{
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      992:{
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }
});

const review = new Swiper('#reviewSwiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '#reviewPagination',
    clickable: true,
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});
