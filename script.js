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
// ページロード後のアンカー補正
window.addEventListener("load", function () {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
});

// スマホ版のニュース一覧省略形
  function toggleNewsList() {
    const newsSection = document.querySelector('.news-list');
    const btn = document.querySelector('.view-more-btn');
    newsSection.classList.toggle('show-all');
    btn.textContent = newsSection.classList.contains('show-all') ? '閉じる' : 'もっと見る';
  }
