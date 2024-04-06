import { fetchImg } from './js/pixabay-api';
import { renderImg } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  searchForm: document.querySelector('.search-form'),
  inputElement: document.querySelector('.search-input'),
  loader: document.querySelector('.loader'),
  load: document.querySelector('.load'),
  galleryList: document.querySelector('.gallery'),
};

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let searchTerm;
let pageCounter = 1;
  const perPage = 15;

const preloader = document.querySelector('.loader');
const showLoader = () => {
  preloader.classList.remove('hidden');
};
const hideLoader = () => {
  preloader.classList.add('hidden');
};
hideLoader();
refs.searchForm.addEventListener('submit', submitHandle);
async function submitHandle(event) {
  event.preventDefault();
  searchTerm = refs.inputElement.value.trim();
  pageCounter = 1;

  refs. galleryList.innerHTML = '';

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    hideLoadMoreBtn();

    return;
  }

  endList();

  showLoader();
  try {
    const images = await fetchImg(searchTerm, pageCounter, perPage);
    const totalHits = images.totalHits;

    if (images.hits.length === 0) {
      refs.galleryList.innerHTML = '';
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoadMoreBtn();
      return;
    } else {
      renderImg(images.hits);
      refs.inputElement.value = '';
      showLoadMoreBtn();
    }
    if (perPage * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndOfCollectionMessage();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

refs.load.addEventListener('click', async () => {
  try {
    if (refs.load) {
      pageCounter += 1;
    }
    const images = await fetchImg(searchTerm, pageCounter, perPage);
    const totalHits = images.totalHits;

    renderImg(images.hits);
    showLoader();
    if (perPage * pageCounter >= totalHits) {
      hideLoadMoreBtn();
      showEndOfCollectionMessage();
    }

    const galleryCardHeight =
      refs.galleryList.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: galleryCardHeight * 3, behavior: 'smooth' });
  } catch (error) {
    console.error('Error fetching more images:', error);
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
    });
  } finally {
    hideLoader();
  }
});
function endList() {
  iziToast.error({
    title: 'Error',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}

function showLoadMoreBtn() {
  refs.load.style.display = 'block';
}

function hideLoadMoreBtn() {
  refs.load.style.display = 'none';
}


