const iconMenu = document.getElementById('menu-hamburguesa');
const closeMenu = document.getElementById('close-menu');
const nav = document.querySelector('.navigator');

iconMenu.addEventListener('click', () => {
    nav.classList.remove('close');
    nav.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('close');
})
