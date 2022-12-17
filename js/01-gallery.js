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



function onClick(evn){
    evn.preventDefault();

    if(evn.target === evn.currentTarget){
        return;
    }

    const originalHref = evn.target.dataset.source;
    const previewHref = evn.target.src;
    
    const options ={
        closable: true,
        onShow: (instance) => {
            evn.target.src = originalHref;
            console.log(evn.target.src);
        },
        onClose: (instance) => {
            evn.target.src = previewHref;
            console.log(evn.target.src);
        }
    }
    const instance = basicLightbox.create(`<img src="${originalHref}" alt"">`, options);
    instance.show();

    //закриття зображення
    galleryBox.addEventListener('keydown', closeImg);
    function closeImg(event){
        if(event.code === "Escape"){
            instance.close()
        }
    }
}



