parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Sug3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./js/gallery-data"));function t(e){return e&&e.__esModule?e:{default:e}}const n=document.querySelector(".js-gallery"),a=document.querySelector(".js-lightbox"),i=document.querySelector(".lightbox__image"),r=e.default.map(({preview:e,original:t,description:n},a)=>`\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${e}"\n  >\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${t}"\n      alt="${n}"\n      data-index="${a}"\n    />\n  </a>\n</li>`).join("");function s(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(a.classList.add("is-open"),c(e.target.dataset.source,e.target.getAttribute("alt"),e.target.dataset.index),window.addEventListener("keydown",e=>{"Escape"===e.code&&a.classList.remove("is-open")}),window.addEventListener("keydown",l))}function o(e){e.target.classList.contains("lightbox__image")||(window.removeEventListener("keydown",e=>{"Escape"===e.code&&a.classList.remove("is-open")}),window.removeEventListener("keydown",l),a.classList.remove("is-open"),i.setAttribute("src"," "),i.setAttribute("alt"," "))}function l(t){const n=document.querySelector(".lightbox__image").dataset.index;if("ArrowRight"===t.code&&n<e.default.length-1){const e=Number(n)+1,t=document.querySelector(`.gallery__image[data-index="${e}"]`);c(t.dataset.source,t.getAttribute("alt"),e)}if("ArrowLeft"===t.code&&n>0){const e=Number(n)-1,t=document.querySelector(`.gallery__image[data-index="${e}"]`);c(t.dataset.source,t.getAttribute("alt"),e)}}function c(e,t,n){i.setAttribute("src",`${e}`),i.setAttribute("alt",`${t}`),i.setAttribute("data-index",`${n}`)}n.innerHTML=r,n.addEventListener("click",s),a.addEventListener("click",o);
},{"./js/gallery-data":"Sug3"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.a3830aa2.js.map