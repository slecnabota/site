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
      550: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      992:{
        slidesPerView: 3,
        spaceBetween: 45,
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
    650: {
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
