let theme1 = document.querySelector('#theme_1');
let theme2 = document.querySelector('#theme_2');
let theme3 = document.querySelector('#theme_3');
let setTheme = document.querySelector('body');
let togglerPosition = document.querySelector('.header__ball');


// Creating function for the different themes.
theme1.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme1');    
});


theme2.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme2');    
});


theme3.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme3');   
});


	