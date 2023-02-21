const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (e) => {
    if(e.target.value.length === 0){
        console.log(true);

        output.textContent = 'Anonymous!'
        console.log(output)
    } else {
        output.textContent = e.target.value
    }

})