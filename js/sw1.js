const swiper = new Swiper('.project-swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.project-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.project-button-next',
      prevEl: '.project-button-prev',
    },
    initialSlide: 0,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});

const swiper2 = new Swiper('.design-swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.design-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.design-button-next',
      prevEl: '.design-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 0,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});

const swiper3 = new Swiper('.design-ex-swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.design-ex-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.design-ex-button-next',
      prevEl: '.design-ex-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 0,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});

const swiper4 = new Swiper('.design-landscape-swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.design-landscape-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.design-landscape-button-next',
      prevEl: '.design-landscape-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 0,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});
const swiper5 = new Swiper('.works-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        type: 'fraction',
      el: '.works-pagination',
      clickable: true,
    },
    allowTouchMove: false,
    navigation: {
      nextEl: '.works-button-next',
      prevEl: '.works-button-prev',
    },
    autoHeight: true,
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
});
const reasons = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
        type: 'fraction',
      el: '.reviews-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    autoHeight: true,
    slidesPerView: 1,
    initialSlide: 0,
    centeredSlides: true,
});
/*works inner swiper sliders*/
const swiper6 = new Swiper('.work1-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.work1-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.work1-button-next',
      prevEl: '.work1-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});
const swiper7 = new Swiper('.work2-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.work2-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.work2-button-next',
      prevEl: '.work2-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992:{
        slidesPerView: 2,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});
const swiper8 = new Swiper('.work3-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.work3-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.work3-button-next',
      prevEl: '.work3-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});
const swiper9 = new Swiper('.work4-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.work4-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.work4-button-next',
      prevEl: '.work4-button-prev',
    },
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints:{
      320: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
});
