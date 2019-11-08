"use strict";

const prom = fetch('https://jsonplaceholder.typicode.com/photos');
const gallery = document.getElementById('all-photos');
const photo = document.getElementsByTagName('IMG');
const darkTheme = document.getElementById('dark-side');

function hangEventShowOne() {
    gallery.addEventListener('click', showOnePhoto);
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

function showOnePhoto(event) {
    let target = event.target;
    target.classList.add('show');
    makeDarkness();
    target.parentElement.appendChild(createCloseBtn());
}

function makeDarkness() {
    darkTheme.classList.remove("hide-dark");
}

function hidePhoto() {
    this.previousSibling.classList.remove('show');
    darkTheme.classList.add("hide-dark");
    this.remove();
}

prom.then((resp) => {
    resp.json().then((data) => {
        alert(data.length);
        buildGallery(data);
    })
});
