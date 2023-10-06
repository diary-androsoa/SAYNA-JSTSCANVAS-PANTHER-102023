let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.2,
    spaceBetween: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });