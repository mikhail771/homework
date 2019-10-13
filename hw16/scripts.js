"use strict";

const prom = fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');
const gallery = document.getElementById('all-photos');
const photo = document.getElementsByTagName('IMG');
const darkTheme = document.getElementById('dark-side');

function hangEventShowOne() {
    for(let i = 0; i < photo.length; i++) {
        photo[i].addEventListener('click', showOnePhoto);
    }
}

function buildGallery(data) {
    data.forEach(function (item) {
        const img = document.createElement("img");
        const li = document.createElement("li");

        img.setAttribute('src', item.url);
        gallery.appendChild(li);
        li.appendChild(img);
    });
    hangEventShowOne();
}

function createCloseBtn() {
    const span = document.createElement("SPAN");
    const x = document.createTextNode("\u00D7");

    span.id = "close";
    span.appendChild(x);
    span.addEventListener('click', hidePhoto);

    return span;
}

function showOnePhoto() {
    this.classList.add('show');
    makeDarkness();
    this.parentElement.appendChild(createCloseBtn());
}

function makeDarkness() {
    darkTheme.style.display = "block";
}

function hidePhoto() {
    darkTheme.style.display = "none";
    this.previousSibling.classList.remove('show');
    this.remove();
}

prom.then((resp) => {
    resp.json().then((data) => {
        buildGallery(data);
    })
});
