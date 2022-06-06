// BACKGROUND COLOR CHANGE //

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

// RESPONSIVE NAVBAR //
const links = document.getElementById('links');

links.addEventListener('click', navbarResponsive);

function navbarResponsive() {
  const navbarMenu = document.getElementById('menu-content');
  if (navbarMenu.className === 'menu-content') {
    navbarMenu.className += ' responsive';
  } else {
    navbarMenu.className = 'menu-content';
  }
}

// ANIMATIONS //

const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
