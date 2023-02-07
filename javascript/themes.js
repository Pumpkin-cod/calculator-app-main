let theme1 = document.querySelector('#theme_1');
let theme2 = document.getElementById('theme_2');
let theme3 = document.getElementById('theme_3');
let setTheme = document.querySelector('body');
let togglerPosition = document.querySelector('.header__ball');


// Creating function for the different themes.
theme1.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme1');
    togglerPosition.style.justifyContent = "flex-start";
    
    
    
});

theme2.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme2');
    togglerPosition.style.justifyContent = "center";
    
    
});

theme3.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme3');
    togglerPosition.style.justifyContent = "flex-end";
    
});


	