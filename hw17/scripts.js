"use strict";

const URL = "https://jsonplaceholder.typicode.com/users";
const promise = fetch(URL);
const namesList = document.getElementById('namesList');
const info = document.getElementById('info');

namesList.addEventListener('click', choseName);

promise.then((resp) => {
    resp.json().then((data) => {
        namesListCreate(data);
        init(data[0]);
    })
});

function choseName(event) {
    let markedNames = document.getElementsByClassName("chosen");
    markedNames[0].classList.remove("chosen");
    event.target.className = "chosen";
    const id = event.target.getAttribute('id-attr');
    getInfoById(id);
}

function init(data) {
    namesList.firstChild.className = "chosen";
    info.textContent = JSON.stringify(data);
}

function namesListCreate(data) {
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");

        if (i === 0)li.className = "chosen";
        namesList.appendChild(li);
        li.textContent = data[i].name;
        li.setAttribute('id-attr', data[i].id);
    }
}

function refreshContent(data) {
    info.textContent = data;
}

function getInfoById(id) {
    const content = fetch(URL + '/' + id);
    content.then((resp) => {
        resp.text().then((data) => {
            refreshContent(data);
        })
    });
}