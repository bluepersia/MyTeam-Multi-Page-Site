const navMobile = document.querySelector ('.nav-mobile');
const navOpen = document.querySelector ('.nav-open');
const navClose = document.querySelector ('.nav-mobile .close-btn');

navOpen.addEventListener ('click', () => navMobile.classList.add ('show'));
navClose.addEventListener ('click', () => navMobile.classList.remove ('show'));
