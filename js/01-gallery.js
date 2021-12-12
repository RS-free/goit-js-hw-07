import { galleryItems } from "./gallery-items.js";
const galleryBlock = document.querySelector(".gallery");
const markupGallery = createGalleryMarkup(galleryItems);
galleryBlock.insertAdjacentHTML("beforeend", markupGallery);
galleryBlock.addEventListener("click", onGalleryClick);
function createGalleryMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
        })
        .join("");
}
function onGalleryClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `);
    instance.show();
    function onKeyEscAction(event) {
        const ESC_KEY_CODE = "Escape";
        const isEscKey = event.code === ESC_KEY_CODE;
        if (isEscKey) {
            instance.close();
        }
    }
    window.addEventListener("keydown", onKeyEscAction);
}
