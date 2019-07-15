'use strict';

function init() {
    let lists = new Lists();
    lists.getAllItems();
    document.querySelector('#deleteList').addEventListener('click', () => {
        lists.removeList();
    });
}

window.onload = init;
