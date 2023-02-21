
const value = document.querySelector('#value');
const increment = document.querySelector('[data-action="decrement"]');
const decrement = document.querySelector('[data-action="increment"]');


let counterValue = 0;

decrement.addEventListener('click', handleIncrement);
increment.addEventListener('click', handleDecrement);

function handleIncrement(){
    counterValue++;
    value.textContent = counterValue
}
function handleDecrement(){
    counterValue--;
    value.textContent = counterValue

}