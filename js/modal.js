const menuLinks = document.querySelectorAll("#gnav-content ul li a"); // メニューリンクを取得
const gnavInput = document.getElementById("gnav-input"); // ハンバーガーメニューのチェックボックスを取得

menuLinks.forEach(link => {
    // clickイベントとtouchstartイベントの両方を追加
    link.addEventListener("click", closeMenu);
    link.addEventListener("touchstart", closeMenu);
});

function closeMenu() {
    gnavInput.checked = false; // メニューを閉じる
}
