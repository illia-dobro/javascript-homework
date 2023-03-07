// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const div = document.querySelector('.gallery');

const list = galleryItems.map(item => {
    return `<a href='${item.original}'><img src='${item.preview}' alt="${item.description}" /></a>`
}).join('')

div.insertAdjacentHTML('afterbegin', list);

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
lightbox.on('show.simplelightbox', function () {
	// do something…
});