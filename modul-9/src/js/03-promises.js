const form = document.querySelector('.form');
const step = document.querySelector('[name="step"]');
const delay = document.querySelector('[name="delay"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(e, position, delay) {
  e.preventDefault();
  console.log(position, delay);

  for (let i = 0; i < amount.value; i++) {
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });

    console.log(promise1);

    promise1
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener('submit', (e, pos = amount.value, del = delay.value) =>
  createPromise(e, pos, del)
);
