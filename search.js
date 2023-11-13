// search.js

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const navIcon = document.querySelector('.NavIcon');
    const searchContainer = document.querySelector('.SearchContainer');
    const overlay = document.querySelector('.Overlay');
  
    // Add a click event listener to the search icon
    navIcon.addEventListener('click', () => {
      // Toggle the visibility of the search container and overlay
      searchContainer.style.display = 'block';
      overlay.style.display = 'block';
    });
  
    // Close the search bar when clicking on the overlay
    overlay.addEventListener('click', () => {
      searchContainer.style.display = 'none';
      overlay.style.display = 'none';
    });
  });