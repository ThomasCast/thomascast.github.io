//BACKGROUND COLOR CHANGE

function changeBg() {
  var navbar = document.getElementById('nav');
  var scrollValue = window.scrollY;
  if (scrollValue > 50) {
    navbar.classList.remove('transparent-navbar');
    navbar.classList.add('white-navbar');
  } else {
    navbar.classList.remove('white-navbar');
    navbar.classList.add('transparent-navbar');
  }
}

window.addEventListener('scroll', changeBg);

//RESPONSIVE NAVBAR
function navbarResponsive() {
  var navbarMenu = document.getElementById('menu-content');
  if (navbarMenu.className === 'menu-content') {
    navbarMenu.className += ' responsive';
  } else {
    navbarMenu.className = 'menu-content';
  }
}
