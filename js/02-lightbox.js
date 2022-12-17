import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description})=>
    `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a> `
).join("")

galleryBox.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});


