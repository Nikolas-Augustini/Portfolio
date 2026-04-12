const menuBtn = document.getElementById('menuBtn');
const menuDisplay = document.getElementById("menu-display-test");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuDisplay.classList.toggle('active');
});