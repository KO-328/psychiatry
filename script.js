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

//スマホでドロップダウン機能ができないのでタップclickで切り替えるようにする
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item > a');

  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const dropdown = this.nextElementSibling;
      if (dropdown && dropdown.classList.contains('dropdown')) {
        e.preventDefault(); // 通常のリンクを無効にする
        dropdown.classList.toggle('show'); // 表示/非表示切り替え
      }
    });
  });
});
