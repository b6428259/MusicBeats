let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.fixed-nav');

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('navbar-hidden');
  } else {
    // Scrolling down
    navbar.classList.add('navbar-hidden');
  }

  prevScrollPos = currentScrollPos;
};
