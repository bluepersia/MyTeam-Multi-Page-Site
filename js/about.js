const directorBtns = document.body.querySelectorAll ('.director-btn');
const directorPanes = document.body.querySelectorAll ('.director .main, .director .secondary');
document.body.querySelectorAll ('.director').forEach (director => director.dataset.activeIndex = 0);

directorBtns.forEach (directorBtn => directorBtn.addEventListener ('click', handleDirectorBtnClick))


function handleDirectorBtnClick ({target})
{
    const director = target.closest ('.director');

    const main = director.querySelector ('.main');
    const secondary = director.querySelector ('.secondary');


    director.dataset.activeIndex = director.dataset.activeIndex == 1 ? 0 : 1;

    main.style.opacity = 0;
    secondary.style.opacity = 0;


    setTimeout (() =>
    {
        if (director.dataset.activeIndex == 1)
        {
            main.style.display = 'none';
            secondary.style.display = 'block';
        }
        else 
        {
            main.style.display = 'block';
            secondary.style.display = 'none';
        }

        setTimeout (() => {

            if (director.dataset.activeIndex == 1)
            {
                secondary.style.opacity = 1;
                main.style.opacity = 0;
            }
            else 
            {
                secondary.style.opacity = 0;
                main.style.opacity = 1;
            }

        }, 16);
    }, 250);


}



