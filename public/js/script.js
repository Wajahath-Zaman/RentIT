
const burger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-items')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});
