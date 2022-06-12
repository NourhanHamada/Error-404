// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// MENU SHOW 
// VALIDATE IF CONSTANT EXIST
if(navToggle) {
    navToggle.addEventListener("click" , () => {
        navMenu.classList.add("show-menu")
    })
}

// MENU HIDDEN
if(navClose) {
    navClose.addEventListener("click" , () => {
        navMenu.classList.remove("show-menu")
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    //when we click on each nav-link, we remove the show menu
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click" , linkAction))

// CHANGE BACKGROUND HEADER
/*function scrollHeader() {
    const header = document.getElementById("header")
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add("scroll-header");else header.classList.remove("scroll-header")
} */

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: "90px",
    duration: 2000,
})

sr.reveal(`.home-data` , {origin: "top" , delay: 200})
sr.reveal(`.home-img` , {origin: "bottom" , delay: 300})
// sr.reveal(`.header` , {origin: "top" , delay: 500})
// sr.reveal(`.home-footer` , {origin: "bottom" , delay: 800})






















