const count = 10;
const apiKey = `5hXNylkorxWa6HyFBTn7byYsrZJi1OMoOeYoT38N7WU`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let isInitialLoad = true;
let photosArray = [];
function ImageLoaded() {
  imagesLoaded++;
  if (imagesLoaded == totalImages) {
    ready = true;
    loader.hidden = true;
  }
}
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", ImageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {}
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
