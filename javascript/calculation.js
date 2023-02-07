let screen=document.querySelector('.header__screen');
const btns=document.querySelectorAll('[data-btn]');
const result=document.querySelector('[data-equals]');
const reset=document.querySelector('[data-reset]');
const del=document.querySelector('[data-delete]');
const calcBody=document.querySelector('.header__main');

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
    screen.innerText += btn.innerText;
    })
})

result.addEventListener('click',()=>{
 
      try{
        screen.innerText=eval(screen.innerText).toFixed(2)
      }
      catch{
          alert('Error!');
      }
  
})


reset.addEventListener('click',()=>{
    screen.innerText=' ';
})

del.addEventListener('click', ()=>{
    screen.innerText=screen.innerText.slice(0,-1);
})