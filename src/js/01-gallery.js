import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

function markupMaker(galleryData) {
  return `<ul style=" list-style: none; display: flex; flex-wrap: wrap; gap: 30px;">${galleryData
    .map(({ preview = '', original = '', description = '' } = {}) => {
      return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
    })
    .join('')}</ul>`;
}

galleryRef.innerHTML = markupMaker(galleryItems);

let galleryModal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
