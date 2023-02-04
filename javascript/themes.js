let theme1 = document.querySelector('#theme_1');
let theme2 = document.getElementById('theme_2');
let theme3 = document.getElementById('theme_3');
let setTheme = document.querySelector('body');
let togglerPosition = document.getElementById('toggler');


theme1.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme1');
    // togglerPosition.style.justifyContent = "flex-start";
    
});

theme2.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme2');
    // togglerPosition.style.justifyContent = "center";
    document.getElementById('toggler') = theme2;
    
});

theme3.addEventListener('click', () => {
    setTheme.setAttribute('id', 'theme3');
    togglerPosition.style.justifyContent = "flex-end";
});


// var slider = document.getElementById("myRange");
//     var output = document.getElementById("rangeValue");
//     $(output).val(slider.value);
//     slider.oninput = function() {
//         $(output).val(slider.value);
//     }