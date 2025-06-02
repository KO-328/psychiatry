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
// トップヘッダーの分下げる機能
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      const header = document.querySelector(".top-header"); // ← 固定ヘッダーのクラス名に合わせる
      if (!target || !header) return;

      e.preventDefault();

      const headerHeight = header.offsetHeight;

      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });
});
//ホバー字のコントラスト
a.menu-link {
  text-decoration: none;
  color: inherit;
  background-color: #f7f7f7;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

a.menu-link:hover {
  background-color: #e0e0e0; /* やや濃いグレーでコントラストアップ */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* うっすら影で立体感 */
}
