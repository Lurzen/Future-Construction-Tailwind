// Display Menu
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayMenu").onclick = () => {
    document.getElementById("main-nav").classList.toggle("display");
  };
});

// Projects Slider
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-slider", {
    type: "fade",
    pagination: false,
    arrows: false,
    drag: false,
  });

  var text = new Splide("#text-slider", {
    type: "fade",
    pagination: false,
    arrows: false,
    drag: false,
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    fixedWidth: true,
    perPage: 1.5,
    gap: 30,
    pagination: false,
    arrows: false,
    isNavigation: true,
    focus: 0,
  });

  main.sync(text);
  main.sync(thumbnails);

  main.mount();
  text.mount();
  thumbnails.mount();

  var nextBtn = document.querySelector(".js-next");
  var prevBtn = document.querySelector(".js-prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => main.go(">"));
    prevBtn.addEventListener("click", () => main.go("<"));
  }
});

// News Slider
document.addEventListener("DOMContentLoaded", function () {
  var newsSplide = new Splide("#news-slider", {
    type: "loop",
    perPage: 2.5,
    perMove: 1,
    gap: "4rem",
    padding: "2rem",

    breakpoints: {
      1024: {
        perPage: 1,
      },
    },
    focus: 0,
    omitEnd: true,
  });
  newsSplide.mount();
});

// Iso Animation
AOS.init({
  once: true,
});
