import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
let query = '';
let page = 1;
const perPage = 15;

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search query' });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (!data.hits.length) {
      iziToast.error({ message: 'Sorry, no images found. Try again!' });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong' });
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async function() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    const maxPages = Math.ceil(data.totalHits / perPage);
    if (page >= maxPages) {
      hideLoadMoreButton();
      iziToast.info({ message: 'You\'ve reached the end of the results.' });
    } else {
      showLoadMoreButton();
    }

    const galleryItem = document.querySelector('.gallery-item');
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2 + 48, //48 - gap of two cards
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong' });
  } finally {
    hideLoader();
  }
});