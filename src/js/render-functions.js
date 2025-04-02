import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images.map(({
                               webformatURL,
                               largeImageURL,
                               tags,
                               likes,
                               views,
                               comments,
                               downloads,
                             }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
      </a>
      <div class="gallery-info">
        <div class="gallery-info-container">
          <span class="gallery-info-title">Likes</span>
          <span class="gallery-info-value">${likes}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Views</span>
          <span class="gallery-info-value">${views}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Comments</span>
          <span class="gallery-info-value">${comments}</span>
        </div>
        <div class="gallery-info-container">
          <span class="gallery-info-title">Downloads</span>
          <span class="gallery-info-value">${downloads}</span>
        </div>
      </div>
    </li>`).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.visibility = 'visible';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.visibility = 'hidden';
}
