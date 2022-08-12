// Mobile Nav Menu
const mainNav = document.querySelector('.main-nav');
const mainNavDropdownBtns = document.querySelectorAll('.main-nav__dropdown');
const mainNavLinks = document.querySelectorAll('.main-nav__link');
const openMenuBtn = document.querySelector('#hamburger-menu');
const closeMenuBtn = document.querySelector('#close');
const mobileNavContent = document.querySelector('#slide-nav');

function openMobileNav() {
  // Hide hamburger button
  openMenuBtn.classList.toggle('hide-menu');
  openMenuBtn.setAttribute('aria-expanded', 'true');
  // Add overlay
  mainNav.classList.toggle('overlay');
  // Show slide-out nav menu
  mobileNavContent.classList.remove('hide-menu');
  mobileNavContent.classList.add('show-menu');
}

function closeMobileNav() {
  // Hide slide-out nav menu
  mobileNavContent.classList.remove('show-menu');
  mobileNavContent.classList.add('hide-menu');
  // Remove overlay
  mainNav.classList.toggle('overlay');
  // Show hamburger button
  openMenuBtn.classList.toggle('hide-menu');
  openMenuBtn.setAttribute('aria-expanded', 'false');
}

openMenuBtn.addEventListener('click', () => {
  if(openMenuBtn.classList.contains('hide-menu')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

closeMenuBtn.addEventListener('click', () => {
  closeMobileNav();
});
