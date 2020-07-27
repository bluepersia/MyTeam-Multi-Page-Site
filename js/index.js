const navMobile = document.querySelector ('.nav-mobile-overlay');
const navOpen = document.querySelector ('.nav-open');
const navClose = document.querySelector ('.nav-mobile .close-btn');

navOpen.addEventListener ('click', openNav);
navClose.addEventListener ('click', closeNav);


function openNav ()
{
    navMobile.classList.add ('show-1');

    setTimeout(() => navMobile.classList.add ('show-2'),  16);
}


function closeNav ()
{
    navMobile.classList.remove ('show-2');

    setTimeout (() => navMobile.classList.remove ('show-1'), 16);
}