'use strict';

console.clear();
console.log(`Started at ${new Date()}`);

(function () {
    const navsidebar = document.getElementById("nav-sidebar");
    const sidebarnavsidebar = document.getElementById("sidebar-nav-sidebar")
    const body = document.getElementsByTagName("body")[0];

    const onClickOutside = (e) => {
        if (!e.target) {
            window.removeEventListener("click", onClickOutside);
            return false;
        }
        if (e.target && e.target.className && e.target.className.length && e.target.className.includes('overlay')) {
            console.log('out side')
            body.classList.toggle("lock-scrollbar");
        }
    };
   
    navsidebar.addEventListener('click', function () {
        body.classList.toggle("lock-scrollbar");
        window.addEventListener("click", onClickOutside);
    })
    sidebarnavsidebar.addEventListener('click', function () {
        body.classList.toggle("lock-scrollbar");
        window.addEventListener("click", onClickOutside);
    })
    
})();