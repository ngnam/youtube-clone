'use strict';

console.clear();
console.log(`Started at ${new Date()}`);

function onView(e) {
    const itemPreview = document.getElementById('item-preview');
    let offsetTop = e.offsetTop,
        offsetLeft = e.offsetLeft;

    itemPreview.style.display = 'block';
    itemPreview.style.top = `${offsetTop}px`;
    itemPreview.style.left = `${offsetLeft}px`;
};

function onMouseleave(e) {
    const itemPreview = document.getElementById('item-preview');
    itemPreview.style.display = 'none';
}