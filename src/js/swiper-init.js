function initSwiper(swiperSelector, nextButton, prevButton, pagination) {
  return new Swiper(swiperSelector, {
    spaceBetween: 27,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
    },
  });
}

// Ініціалізація слайдерів
document.addEventListener('DOMContentLoaded', function () {
  initSwiper(
    '.mySwiper',
    '.swiper-button-next',
    '.swiper-button-prev',
    '.swiper-pagination'
  );
  initSwiper(
    '.mySwiper-gallery',
    '.swiper-button-next',
    '.swiper-button-prev',
    '.swiper-pagination'
  );
});
