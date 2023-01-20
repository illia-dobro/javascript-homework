const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

size.addEventListener('input', ()=>{   
    text.style.fontSize = `${size.value}px`;    
})