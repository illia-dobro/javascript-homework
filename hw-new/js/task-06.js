const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    input.classList.remove('valid', 'invalid')
    if(input.value.length !== +input.dataset.length){
        input.classList.add('invalid')
    } else{
        input.classList.add('valid')
    }
})