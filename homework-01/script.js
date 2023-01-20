// Завдання 1

const name = 'Генератор захисного поля';
let price = 1000;
console.log(`Обрано «${name}», ціна за штуку ${price} кредитів'`);
price = 2000;
console.log(`Обрано «${name}», ціна за штуку ${price} кредитів'`);

// Завдання 2

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log(`"На складі недостатньо товарів!"`);
} else {
  console.log(`"Замовлення оформлено, з вами зв'яжеться менеджер"`);
}

// Завдання 3

const ADMIN_PASSWORD = 'jqueryismyjam';
//let message = prompt('Password:');
if (!message) {
  console.log(`'Скасовано користувачем!'`);
} else if (message === ADMIN_PASSWORD) {
  console.log(`'Ласкаво просимо!'`);
} else {
  console.log(`'Доступ заборонений, невірний пароль!'`);
}

// Завдання 4
