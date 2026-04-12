const menuBtn = document.getElementById('menuBtn');
const menuDisplay = document.getElementById("menu-display-test");
const menuExit = document.querySelector(".x");

menuBtn.addEventListener('click', () => {
    menuDisplay.classList.toggle('active');
});

menuExit.addEventListener('click', () => {
    menuDisplay.classList.remove('active');
});