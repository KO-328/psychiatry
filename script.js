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
    const newsSection = document.querySelector('ul.news-list');
    const btn = document.querySelector('.view-more-btn');
    const isExpanded = newsSection.classList.contains('show-all');
    const listItems = newsSection.querySelectorAll('li');

    if (!isExpanded) {
      // 省略状態 → 展開表示に切り替え
      listItems.forEach(li => li.style.display = 'list-item');
      newsSection.classList.add('show-all');
      btn.textContent = '閉じる';
    } else {
      // 展開状態 → 省略表示に戻す
      const showCount = window.innerWidth <= 768 ? 3 : 5;
      listItems.forEach((li, index) => {
        li.style.display = index < showCount ? 'list-item' : 'none';
      });
      newsSection.classList.remove('show-all');
      btn.textContent = 'もっと見る';
    }
  }

  // 初期表示時に省略する
  document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.querySelector('ul.news-list');
    const listItems = newsSection.querySelectorAll('li');
    const showCount = window.innerWidth <= 768 ? 3 : 5;
    listItems.forEach((li, index) => {
      li.style.display = index < showCount ? 'list-item' : 'none';
    });
  });


// トップヘッダーの分下げる機能 (全然うまくいかない！！)

window.addEventListener("load", function () {
  if (location.hash) {
    const id = location.hash.substring(1);
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        const header = document.querySelector(".top-header");
        const headerHeight = header ? header.offsetHeight : 0;
        const extraOffset = 20;
        const offsetTop =
          target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;

        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }, 200); // 遅延をやや長めにすると安定
    }
  }
});