// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");
    if (toTop && header) {
        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
            toTop.classList.remove("hidden");
            toTop.classList.add("flex");
        } else {
            header.classList.remove("navbar-fixed");
            toTop.classList.remove("flex");
            toTop.classList.add("hidden");
        }
    }
};

// const paginationPrev = document.getElementById("pagination-prev");
// const paginationNext = document.getElementById("pagination-next");
// console.log(paginationPrev);
