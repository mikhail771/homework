'use strict';

const btn = document.getElementById('addBtn');
const list = document.getElementById('list');

function addLiTags(){
    const count = Number(document.getElementById('count').value);

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for(let i = 1; i < count + 1; i++) {

        let li = document.createElement('li');
        li.innerHTML = i;
        list.append(li);
    }
}

btn.addEventListener('click', addLiTags);
