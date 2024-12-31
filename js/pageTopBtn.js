const pageTop = document.getElementById("page-top");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
    const scrollVolY = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollVolY;

    if (scrollVolY > 100) {
        pageTop.classList.add("visible");
    } else {
        pageTop.classList.remove("visible");
    }

    const distanceToFooter = footerTop - (scrollVolY + windowHeight);
    if (distanceToFooter < 0) {
        pageTop.style.bottom = `${30 - distanceToFooter}px`;
    } else {
        pageTop.style.bottom = "30px";
    }
});

pageTop.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
});