import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description})=>
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div> `
).join("")

galleryBox.insertAdjacentHTML("beforeend", markup);

galleryBox.addEventListener('click', onClick);

const options =
{
    /*
     * Prevents the lightbox from closing when clicking its background.
     */
    closable: true,
    /*
     * One or more space separated classes to be added to the basicLightbox element.
     */
     className: '',
    /*
     * Function that gets executed before the lightbox will be shown.
     * Returning false will prevent the lightbox from showing.
     */
    onShow: (instance) => {
        console.dir(instance);
    },
    /*
     * Function that gets executed before the lightbox closes.
     * Returning false will prevent the lightbox from closing.
     */
    onClose: (instance) => {}
}


function onClick(evn){
    evn.preventDefault();

    if(evn.target === evn.currentTarget){
        return;
    }

    const originalHref = evn.target.dataset.source;

    const options =
{
    /*
     * Prevents the lightbox from closing when clicking its background.
     */
    closable: true,
    /*
     * One or more space separated classes to be added to the basicLightbox element.
     */
     className: '',
    /*
     * Function that gets executed before the lightbox will be shown.
     * Returning false will prevent the lightbox from showing.
     */
    onShow: (instance) => {
        evn.target.src = evn.target.dataset.source;
        console.dir(evn.target.src);
    },
    /*
     * Function that gets executed before the lightbox closes.
     * Returning false will prevent the lightbox from closing.
     */
    onClose: (instance) => {
        console.log(evn.target.src);
    }
}
    
    const instance = basicLightbox.create(`<img src="${originalHref}" alt"">`, options);
    instance.show();

    
}



