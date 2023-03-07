const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const email = document.querySelector('input[name="email"]');
const text = document.querySelector('textarea[name="message"]');

const obj = {
  email: ' ',
  message: ' ',
};

if (localStorage.getItem('feedback-form-state')) {
  email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  text.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

const handleStorge = throttle(function(e){
if (obj[e.target.name]) {
    obj[e.target.name] = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}, 500)


form.addEventListener('input', (e) => handleStorge(e));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    email: email.value,
    message: text.value,
  });
  email.value = ' ';
  text.value = ' ';
});
