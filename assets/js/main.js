const heroSliderThumbs = new Swiper(".heroSliderThumbs", {
  slidesPerView: 9,
  direction: 'vertical',
  centeredSlides: true,
  centeredSlidesBounds: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  autoplay: true,
});

const heroSlider = new Swiper(".heroSlider", {
  effect: 'fade',
  autoplay: true,
  fadeEffect: {
    crossFade: true, // Плавное затухание
  },
  thumbs: {
    swiper: heroSliderThumbs,
  },
});