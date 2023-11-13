const promoContainer = document.querySelector('.promo-container');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    promoContainer.scrollBy({
        left: -promoContainer.offsetWidth,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    promoContainer.scrollBy({
        left: promoContainer.offsetWidth,
        behavior: 'smooth'
    });
});
