const pageTop = document.getElementById("page-top");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
    const scrollVolY = window.scrollY; // 現在のスクロール量
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollVolY;

    /**
     * ページ上端からのスクロール量が
     * 100pxを超えたらTOPボタンを表示する
     */
    if (scrollVolY > 100) {
        pageTop.classList.add("visible");
    } else {
        pageTop.classList.remove("visible");
    }

    // フッターとの重なりを防ぐための調整
    const distanceToFooter = footerTop - (scrollVolY + windowHeight);
    if (distanceToFooter < 0) {
        pageTop.style.bottom = `${30 - distanceToFooter}px`; // フッターと干渉しないよう調整
    } else {
        pageTop.style.bottom = "30px"; // 通常時の位置
    }
});

// TOPボタンがクリックされたらページトップへ遷移する
pageTop.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
});
