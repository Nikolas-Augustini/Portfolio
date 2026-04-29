const slides = document.querySelectorAll("main > section");
let index = 0;

function goToSlide(i) {
    index = Math.max(0, Math.min(i, slides.length - 1));
    slides[index].scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".arrow-left").onclick = () => goToSlide(index - 1);
document.querySelector(".arrow-right").onclick = () => goToSlide(index + 1);