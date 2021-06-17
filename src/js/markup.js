import pictures from './gallery-data'

export default pictures.map(({preview, original,description}, index) => {
  return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${preview}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-index="${index}"
    />
  </a>
</li>`

}).join("")