const carousel = document.getElementById("carousel");
const slides = carousel.children;
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  carousel.scrollTo({
    left: slides[index].offsetLeft,
    behavior: "smooth"
  });
}, 5000);
