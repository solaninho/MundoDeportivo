document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {deay: 500 });
ScrollReveal().reveal('.cards-banner-one', {deay: 500 });
ScrollReveal().reveal('.cards-banner-two', {deay: 500 });