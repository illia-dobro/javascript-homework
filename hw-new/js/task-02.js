const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')


const lis = ingredients.map(i => {
  const li = document.createElement('li');
  li.className = 'item';
  const textNode = document.createTextNode(i);
  li.append(textNode);
  return li
})

ul.append(...lis);


