// Mobile Nav Menu
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav__link');
const signinBtns = document.querySelectorAll('.signin');
const openMenuBtn = document.querySelector('#hamburger-menu');
const closeMenuBtn = document.querySelector('#close');
const dropdownBtns = document.querySelectorAll('.main-nav__dropdown');
const mobileNavContent = document.querySelector('#slide-nav');
let currentDropdownMenu = false;
let opened = false;

function openMobileNav() {
  // Hide hamburger button
  openMenuBtn.classList.toggle('hide-menu');
  openMenuBtn.setAttribute('aria-expanded', 'true');
  // Add overlay
  mainNav.classList.add('overlay');
  // Show slide-out nav menu
  mobileNavContent.classList.remove('hide-menu');
  mobileNavContent.classList.add('show-menu');
  closeMenuBtn.focus();
}

function closeMobileNav() {
  // Hide slide-out nav menu
  mobileNavContent.classList.remove('show-menu');
  mobileNavContent.classList.add('hide-menu');
  // Remove overlay
  mainNav.classList.remove('overlay');
  // Show hamburger button
  openMenuBtn.classList.toggle('hide-menu');
  openMenuBtn.setAttribute('aria-expanded', 'false');
  openMenuBtn.focus();
}

function toggleDropdownMenu(button) {
  const dropMenu = button.nextElementSibling;

  if (dropMenu.classList.contains('hidden')) {
    button.setAttribute('aria-expanded', true);
    // Show dropdown menu
    dropMenu.classList.remove('hidden');
    dropMenu.classList.add('.dropdown-active');
    dropMenu.querySelector('li a').focus();
    // Capture name of open dropdown
    currentDropdownMenu = button;
    opened = true;
  } else {
    button.setAttribute('aria-expanded', false);
    // Hide dropdown menu
    dropMenu.classList.add('hidden');
    dropMenu.classList.remove('.dropdown-active');
    // Reset dropdown
    currentDropdownMenu = false;
    opened = false;
  }
}

function handleDropdownMenu(e) {
  const dropBtn = e.currentTarget;

  // If another dropdown menu is open, close that open menu
  if(opened === true) {
    toggleDropdownMenu(currentDropdownMenu);
  }
  toggleDropdownMenu(dropBtn);
}

// Close dropdown menu from nav link or signin button
function closeDropdownMenu() {
  if(opened === true) {
    toggleDropdownMenu(currentDropdownMenu);
  }
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

// Close mobile nav with Escape key
closeMenuBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === 'Escape' || e.keyCode === 27) {
    closeMobileNav();
  }
});

dropdownBtns.forEach(dropBtn => {
  dropBtn.addEventListener('click', (e) => {
    handleDropdownMenu(e);
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', closeDropdownMenu);
});

signinBtns.forEach(button => {
  button.addEventListener('click', closeDropdownMenu);
});
