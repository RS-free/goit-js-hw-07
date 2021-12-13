import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryBlock = document.querySelector(".gallery");
const markupGallery = createGalleryMarkup(galleryItems);
galleryBlock.insertAdjacentHTML("beforeend", markupGallery);
galleryBlock.addEventListener("click", onGalleryClick);
function createGalleryMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`;
        })
        .join("");
}
new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
    scrollZoomFactor: 0.5,
    captionPosition: "bottom",
});
function onGalleryClick(event) {
    if (!event.target.classList.contains("gallery__item")) {
        return;
    }
}
