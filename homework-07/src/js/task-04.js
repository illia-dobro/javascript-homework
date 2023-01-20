let counterValue = 0;
const value=document.querySelector('#value')

function increment(){
    counterValue++;
    value.textContent = counterValue;
}

function decrement(){
    counterValue--;
    value.textContent = counterValue;
}

const btn = document.querySelectorAll('[data-action]');

btn.forEach(i => i.addEventListener('click', ()=>{
    i.dataset.action === 'increment' ? increment() :  decrement();
}))