// Display Menu
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayMenu").onclick = () => {
    document.getElementById("main-nav").classList.toggle("display");
  };
});

// Language Select
document.addEventListener("click", (e) => {
  const lang = document.getElementById("lang-dropdown");
  if (!lang) return;

  if (lang.contains(e.target)) {
    lang.classList.toggle("active");
  } else {
    lang.classList.remove("active");
  }
});

// Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  var heroSwiper = new Swiper(".heroSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".hero-nextbtn",
      prevEl: ".hero-prevbtn",
    },
  });
  var textSwiper = new Swiper(".hero-textSlider", {
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    allowTouchMove: false,
  });
  heroSwiper.controller.control = textSwiper;
});

// Scroll Down
document.querySelector(".scroll-down").addEventListener("click", function (e) {
  gsap.registerPlugin(ScrollToPlugin);
  const target = this.getAttribute("href");
  e.preventDefault();
  gsap.to(window, {
    duration: 1.8,
    scrollTo: target,
    ease: "power1.inOut",
  });
});

// News Slider
document.addEventListener("DOMContentLoaded", function () {
  var newsSwiper = new Swiper("#news-slider", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    loopedSlides: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    navigation: {
      nextEl: ".news-nextBtn",
      prevEl: ".news-prevBtn",
    },

    breakpoints: {
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 64,
      },
    },
  });
});

// Projects Slider
document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper("#main-slider", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    allowTouchMove: false,
    navigation: {
      nextEl: ".js-next",
      prevEl: ".js-prev",
    },
  });

  var textSwiper = new Swiper("#text-slider", {
    effect: "fade",
    allowTouchMove: false,
  });

  var thumbnailSwiper = new Swiper("#thumbnail-slider", {
    slidesPerView: 1.5,
    spaceBetween: 30,
  });

  function screenController() {
    if (window.innerWidth >= 1024) {
      mainSwiper.controller.control = [textSwiper, thumbnailSwiper];
      thumbnailSwiper.controller.control = [mainSwiper, textSwiper];
    } else {
      mainSwiper.controller.control = textSwiper;
      thumbnailSwiper.controller.control = undefined;
    }
  }
  screenController();
  window.addEventListener("resize", screenController);
});

// Iso Animation
AOS.init({
  once: true,
});

// Footer Accordion
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      btn.nextElementSibling.classList.toggle("active");
    });
  });
});

// Footer Office Slider
document.addEventListener("DOMContentLoaded", function () {
  var footerOfficeSwiper = new Swiper(".footer-office-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".footer-office-next",
      prevEl: ".footer-office-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 0,
        allowTouchMove: false,
      },
      1025: {
        slidesPerView: 4,
        allowTouchMove: false,
      },
    },
  });
});
