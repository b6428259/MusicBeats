// Retrieve the necessary elements
const carousel = document.getElementById('carousel');
const scrollButtonLeft = document.querySelector('.scroll-button.left');
const scrollButtonRight = document.querySelector('.scroll-button.right');

// Add event listener for the scroll button on the right
scrollButtonRight.addEventListener('click', () => {
  carousel.scrollLeft += carousel.offsetWidth;
});

// Add event listener for the scroll button on the left
scrollButtonLeft.addEventListener('click', () => {
  carousel.scrollLeft -= carousel.offsetWidth;
});

// Add event listener for the carousel scroll event
carousel.addEventListener('scroll', () => {
  if (carousel.scrollLeft > 0) {
    scrollButtonLeft.style.display = 'block';
  } else {
    scrollButtonLeft.style.display = 'none';
  }

  if (carousel.scrollLeft + carousel.offsetWidth < carousel.scrollWidth) {
    scrollButtonRight.style.display = 'block';
  } else {
    scrollButtonRight.style.display = 'none';
  }
});