'use strict';
const list = document.querySelector('#list');
const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const ul = document.querySelector('ul');
const children = list.children;
const closeBtn = document.querySelector('.close');
const lastElem = document.querySelector('.last_elem');
const empty = document.querySelector('.empty');
const modalWindow = document.querySelector('.modal_window');

function addTask() {
    if (inp.value) {
        const newTask = document.createElement('li');
        const checkBox = document.createElement('input');
        list.appendChild(newTask);
        checkBox.type = 'checkbox';
        newTask.textContent = inp.value;
        newTask.appendChild(checkBox);
    } else if (inp.value === '') {
        empty.classList.remove('hidden');
        modalWindow.classList.remove('hidden');
    }
    const close = document.querySelectorAll('ul input');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            if (children.length > 1) {
                close[i].parentElement.remove();
            } else {
                lastElem.classList.remove('hidden');
                modalWindow.classList.remove('hidden');
            }
        });
    }
    inp.value = '';
}

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    empty.classList.add('hidden');
    lastElem.classList.add('hidden');
});

btn.addEventListener('click', addTask);