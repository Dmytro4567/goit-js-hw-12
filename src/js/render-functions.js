import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  gallery.innerHTML = images.map(({
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
      </li>`).join("");
  new SimpleLightbox(".gallery a").refresh();
}