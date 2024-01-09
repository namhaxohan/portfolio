/*==================toggle icons======================*/
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

/*================== remove toggle icons======================*/

// menu.classList.remove("bx-x");
// navbar.classList.remove("active");

/*================== scroll reveal ======================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .social-media', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================== typed js ======================*/
var typed = new Typed((".developer"), {
    strings: ["Frontend Developer", "Programer", "Web Designer", "Blogger"],
    typespeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true,
})