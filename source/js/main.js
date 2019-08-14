
var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var map__noJS = document.querySelector('.map__block');

navMain.classList.remove('nav--nojs');
map__noJS.classList.remove('map__block--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
