const valInp = document.querySelector('#validation-input');

valInp.addEventListener('focusout', () => {
  if (valInp.value.length >= valInp.dataset.length) {
    valInp.classList.add('valid');
  } else {
    valInp.classList.add('invalid');
  }
});

valInp.addEventListener('focus', () => {
  valInp.classList.remove('valid');
  valInp.classList.remove('invalid');
});
