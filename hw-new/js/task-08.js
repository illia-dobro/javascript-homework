
const form = document.querySelector('.login-form');
const inputLogin = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');

function reset(){
    form.elements[0].value = '';
    form.elements[1].value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inputLogin.value.length === 0 || inputPassword.value.length === 0 ){
        alert('Не усі поля заповнені')
    } else {
        const elemts = form.elements;

        const obj = {
            email: elemts[0].value,
            password: elemts[1].value
        }
        console.log(obj)
        reset()
    }
})