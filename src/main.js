import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search query' });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetchImages(query)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.error({ message: 'Sorry, there are no images matching your search query. Please, try again!' });
        return;
      }
      renderImages(data.hits);
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({ title: 'Error', message: 'Something went wrong' });
    });
});