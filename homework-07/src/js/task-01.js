const count = document.querySelectorAll('.item');
console.log(`У списку ${count.length} категорії.`);

const headings = document.querySelectorAll('.item h2');

headings.forEach(i => {
    console.log(`Категорія: ${i.textContent}`);
    const lists = i.nextElementSibling;
    console.log(lists.children.length);
})