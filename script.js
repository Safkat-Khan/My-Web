const menu = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

let menuOpen = false;
menu.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    menuItems.classList.add('open');
    menuItem.forEach(item => item.classList.add('open'));
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    menuItems.classList.remove('open');
    menuItem.forEach(item => item.classList.remove('open'));
    menuOpen = false;
  }
});
