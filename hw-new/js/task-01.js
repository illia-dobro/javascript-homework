// Напиши скрипт, який:

//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
//елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelectorAll('#categories .item');
console.log('Number of categories:', list.length);

list.forEach(item => {
    console.log('Category:',item.firstElementChild.textContent);
    const li = item.querySelectorAll('ul li');
        console.log('Elements:', li.length);
})
