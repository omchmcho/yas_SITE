const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const gnavInput = document.getElementById("gnav-input");
const galleryImgs = document.querySelectorAll(".gallery-img");
const menuLinks = document.querySelectorAll("#gnav-content ul li a");
const closeModal = document.querySelector(".close");

galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        gnavInput.checked = false; // メニューを閉じる
    });
});