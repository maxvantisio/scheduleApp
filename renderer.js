'use strict';
import {Tags} from './tags.js';

const tags = new Tags();

//render the tag list
//tagName = string name of new tag
function renderTags(tagName) {
    if (tags.tagList.length == 1) {
        startTagList(tagName);
    } else {
        updateTagList(tagName);
    }
}

//render an already existing tag list
function updateTagList(tagName) {
    let endOfList = document.getElementById('tagList').lastChild;
    let newTag = document.createElement('li');
    let newText = document.createTextNode(`${tagName}`);
    newTag.appendChild(newText);
    endOfList.appendChild(newTag);
}

//render a tag list for the first time
function startTagList(tagName) {
    let start = document.getElementById('tagSection');
    let newList = document.createElement('ul');
    newList.id = 'tagList';

    let newTag = document.createElement('li');
    newTag.className = 'tag';
    let tagText = document.createTextNode(`${tagName}`);
    newTag.appendChild(tagText);
    newList.appendChild(newTag);

    start.appendChild(newList);
}

//create a new tag, add it to the tag list, render new tag list
//e = enter, to make sure that the addTag function (inner) only runs when user is done
function addTag(e) {
    if (e.key == "Enter") {
        let reg = /^[a-zA-Z0-9_]+(?: [a-zA-Z0-9_]+)*$/; //ensures alphanumeric characters and singular spaces (no trailing/leading)
        if (reg.test(e.target.value)) {
            tags.addTag(e.target.value);
            renderTags(e.target.value); //show updated list of tags
            hideAll();
        }
    }
}

//Add event listeners
function initEvents() {
    let tagButton = document.getElementById('tagButton');
    tagButton.addEventListener('click', showInput);

    let input = document.getElementById('tagInput');
    input.addEventListener('keydown', addTag);
}

//show text boxes for input
function showInput() {
    hideAll();
    const input = document.getElementById('tagInput');
    input.value="";
    input.style.visibility = 'visible'
    input.focus();
}

//hide all elements with class "hide"
function hideAll() {
    let elements = document.getElementsByClassName('hide');
    for (let e of elements) {
        e.style.visibility = "hidden";
    }
}

function init() {
    hideAll();
    initEvents();
}

init();