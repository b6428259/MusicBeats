window.addEventListener('scroll', function () {
    var banner = document.querySelector('.banny-container');
    var bannerPosition = banner.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (bannerPosition < screenPosition) {
        banner.classList.add('show');
    } else {
        banner.classList.remove('show');
    }
});