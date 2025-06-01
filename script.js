const carousel = document.getElementById("carousel");
const slides = carousel.children;
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  carousel.scrollTo({
    left: slides[index].offsetLeft,
    behavior: "smooth"
  });
}, 4000);

function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}
// ページ内リンクの際、ヘッダー分のズレ補正
  document.addEventListener("DOMContentLoaded", function () {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          const offset = 100; // ← ヘッダーの高さに応じて
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }, 100); // ページロード後に発動
      }
    }
  });
