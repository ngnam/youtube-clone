'use strict';

console.clear();
console.log(`Started at ${new Date()}`);

function onView(e) {
    const itemPreview = document.getElementById('item-preview');
    const parentElement = e.parentElement.parentElement;
    let offsetTop = parentElement.offsetTop,
        offsetLeft = parentElement.offsetLeft;

    itemPreview.style.display = 'block';
    itemPreview.style.top = `${offsetTop}px`;
    itemPreview.style.left = `${offsetLeft}px`;
};

var translateX = 0;

function onMouseleave(e) {
    const itemPreview = document.getElementById('item-preview');
    itemPreview.style.display = 'none';
}

function dragStart(event) {
    translateX = 0;
    event.dataTransfer.setData("clientX", event.clientX);
    event.dataTransfer.setData("offsetX", event.offsetX);
}

function dragging(event) {
    event.dataTransfer.setData("clientX", event.clientX);
    event.dataTransfer.setData("offsetX", event.offsetX);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    // event.preventDefault();
    const topbarscroller = document.getElementById("topbarscroller")
    const childnode = topbarscroller.children[0]
    const clientX = event.dataTransfer.getData('clientX')
    const offsetX = event.dataTransfer.getData('offsetX')
    console.log(`clientX: ${clientX}, offsetX: ${offsetX}`);
    if (offsetX < 1000) {
        childnode.style.transform = `translateX(${0}px)`;
    } else {
        childnode.style.transform = `translateX(${-offsetX}px)`;
    }
}

(function () {
    const toparrowleft = document.getElementById('topbar-arrow-left')
    const toparrowright = document.getElementById('topbar-arrow-right')
    toparrowleft.addEventListener('click', function () {
        if (translateX === -1000 ) return;
        const topbarscroller = document.getElementById("topbarscroller")
        const childnode = topbarscroller.children[0]
        translateX -= 200;
        childnode.style.transform = `translateX(${translateX}px)`;
    })

    toparrowright.addEventListener('click', function () {
        if (translateX === 0 ) return;
        const topbarscroller = document.getElementById("topbarscroller")
        const childnode = topbarscroller.children[0]
        translateX += 200;
        childnode.style.transform = `translateX(${translateX}px)`;
    })
})();

(function () {
    const sidebar = document.getElementById("sidebar");
    const navsidebar = document.getElementById("nav-sidebar");
    const pagecontent = document.getElementById("page-content");
    const topbarscroller = document.getElementById("topbarscroller")
    navsidebar.addEventListener('click', function () {
        console.log(sidebar);
        sidebar.classList.toggle("mini");
        pagecontent.classList.toggle('mini')
        topbarscroller.classList.toggle('mini')
    })
})();