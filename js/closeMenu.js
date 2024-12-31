const menuLinks = document.querySelectorAll("#gnav-content ul li a");
const gnavInput = document.getElementById("gnav-input");

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
    link.addEventListener("touchstart", closeMenu);
});

function closeMenu() {
    gnavInput.checked = false;
}