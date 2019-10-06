"use strict";

const inputName = document.getElementById('name');
const inputSurename = document.getElementById('sure-name');
const inputPhonenumber = document.getElementById('phone-number');
const saveBtn = document.getElementById('save-btn');
let spans =  document.getElementsByTagName('SPAN');
let name = null;
let sureName = null;
let phoneNumber = null;

function initValuesAfterSubmit(){
    name = inputName.value;
    sureName = inputSurename.value;
    phoneNumber = inputPhonenumber.value;
}

function clearingInputs() {
    inputName.value = "";
    inputSurename.value = "";
    inputPhonenumber.value = "";
}

function addNewRecord() {
    initValuesAfterSubmit();
    let table = document.getElementById("table").getElementsByTagName("TBODY")[0];
    let row = document.createElement("TR");
    let td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode(name));
    let td2 = document.createElement("TD");
    td2.appendChild(document.createTextNode(sureName));
    let td3 = document.createElement("TD");
    td3.appendChild(document.createTextNode(phoneNumber));
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(addDeleteBtn());
    table.appendChild(row);
    hangEventDelete();
    clearingInputs();
}

function addDeleteBtn() {
    const span = document.createElement('SPAN');
    span.appendChild(document.createTextNode("\u00D7"));
    return span;
}
function deleteRecord() {
    const del = this.parentElement;
     del.remove();
}

function hangEventDelete(){
    for (let i = 0 ; i < spans.length; i++) {
        spans[i].addEventListener('click', deleteRecord,false);
    }
}
saveBtn.addEventListener('click', addNewRecord, false);

spans.addEventListener('click', deleteRecord());
