import iziToast from 'izitoast';
import { refs, lightbox } from '../main';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImg(arr) {
  if (arr.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } else {
    const markup = arr
      .map(
        photo =>
          `<li class="photos-block">
            <a class="photos-link" href="${photo.largeImageURL}">
            <img class="photo" src="${photo.webformatURL}" alt="${photo.tags}"/>
            </a>
            <ul class="photo-data">
            <li class="photo-data-detail"><p><span class="info">Likes</span></br>${photo.likes}</p></li>
            <li class="photo-data-detail"><p><span class="info">Views</span></br>${photo.views}</p></li>
            <li class="photo-data-detail"><p><span class="info">Comments</span></br>${photo.comments}</p></li>
            <li class="photo-data-detail"><p><span class="info">Downloads</span></br>${photo.downloads}</p></li>
            </ul>
            </li>`
      )
      .join('');
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  }
}
