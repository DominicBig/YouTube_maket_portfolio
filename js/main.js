const swiper = new Swiper(".channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".channel-button-next",
    prevEl: ".channel-button-prev",
  },
});

const swiper2 = new Swiper(".reccomended-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1500: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".reccomended-button-next",
    prevEl: ".reccomended-button-prev",
  },
});

const swiper3 = new Swiper(".fruits-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".fruits-button-next",
    prevEl: ".fruits-button-prev",
  },
});

const searchButton = document.querySelector(".mobile-search");
const mobileSearch = document.querySelector(".input-group");
searchButton.addEventListener("click", () => {
  mobileSearch.classList.toggle("is-open");
});
