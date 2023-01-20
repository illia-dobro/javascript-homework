const nameInput = document.querySelector('#name-input');
const nameOuput = document.querySelector('#name-output');
nameInput.value = ''

nameInput.addEventListener('input', ()=>{
    nameOuput.textContent = nameInput.value
})
