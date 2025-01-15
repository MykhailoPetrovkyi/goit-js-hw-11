import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages, clearImages } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const input = form.elements.search;

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchQuery = input.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });
    clearImages();
    return;
  }

  fetchImages(searchQuery)
    .then(data => {
      loaderCheck(true);
      if (data.hits.length === 0) {
        input.value = '';
        iziToast.error({
          title: 'Error',
          message: `❌ Sorry, there are no images matching your search query. Please enter the correct values!`,
          position: 'topRight',
        });
        return;
      }
      renderImages(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(loaderCheck(false));
});

const loaderCheck = load =>
  (loader.style.display = load ? 'none' : 'inline-block');
