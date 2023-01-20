const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

ingredients.forEach(i => {
  const li = document.createElement('li');
  li.innerText = i;
  ul.append(li)
})