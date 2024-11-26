//Burger_menu
const burger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-items')

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});


//Adding a Client Form Pop-Up:
const button = document.getElementById('add-button');
const clientForm = document.getElementById('add-form');

button.addEventListener('click', () => {
    clientForm.classList.remove('hidden');
})