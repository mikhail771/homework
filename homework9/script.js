'use strict';

const li = document.getElementsByTagName("LI");
const close = document.getElementsByClassName("close");
const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');

function createTask() {
    const inputValue = document.getElementById("input").value;
    const t = document.createTextNode(inputValue);
    const li = document.createElement("li");

    li.appendChild(t);
    document.getElementById("list").appendChild(li);
    document.getElementById("input").value = "";
    createDeleteBtn();
    hangEventDelete();
}

function createDeleteBtn() {
        const span = document.createElement("SPAN");
        const x = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(x);

        for (let i = 0; i < li.length; i++) {
        li[i].appendChild(span);
    }
}

function deleteTask(){
    const div = this.parentElement;
    div.style.display = "none";
}

function marking(e){
    e.target.classList.toggle('mark');
}

function hangEventDelete(){
    for (let i = 0 ; i < close.length; i++) {
        close[i].addEventListener('click', deleteTask,false);
    }
}

addBtn.addEventListener('click', createTask,false);

list.addEventListener('click', marking, false);
