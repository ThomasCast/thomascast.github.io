function changeBg() {
  var navbar = document.getElementById('nav');
  var scrollValue = window.scrollY;
  if (scrollValue > 520) {
    navbar.classList.remove('transparent-navbar');
    navbar.classList.add('white-navbar');
  } else {
    navbar.classList.remove('white-navbar');
    navbar.classList.add('transparent-navbar');
  }
}

window.addEventListener('scroll', changeBg);
