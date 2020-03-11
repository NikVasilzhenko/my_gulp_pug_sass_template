let bigSlider = new Swiper('#js-big-slider', {
  slidesPerView: 1,
  scrollbar: {
    el: '.js-swiper-scrollbar',
    hide: false,
  },
  navigation: {
    nextEl: '.js-swiper-button-next',
  },
  autoplay: {
    delay: 5000,
  },
});

let partnersSlider = new Swiper('#js-partners-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  scrollbar: {
    el: '.js-swiper-scrollbar',
    hide: false,
  },
  navigation: {
    nextEl: '.js-swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  autoplay: {
    delay: 5000,
  },
});

let smiSlider = new Swiper('#js-smi-slider', {
  slidesPerView: 1,
  scrollbar: {
    el: '.js-swiper-scrollbar',
    hide: false,
  },
  navigation: {
    nextEl: '.js-swiper-button-next',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  autoplay: {
    delay: 5000,
  },
});

let casesSlider = new Swiper('#js-cases-slider', {
  slidesPerView: 1,
  scrollbar: {
    el: '.js-swiper-scrollbar',
    hide: false,
  },
  navigation: {
    nextEl: '.js-swiper-button-next',
  },
  autoplay: {
    delay: 5000,
  },
});

let mainPicSlider = new Swiper('#js-main-pic-slider', {
	slidesPerView: 1,
	pagination: {
        el: '#js-main-pic-slider-pagination',
        clickable: true,
	},
	autoplay: {
		delay: 5000,
	},
});