var buttonOpen = document.querySelector(".page-header__nav-toggle");
var navMenu = document.querySelector(".main-nav");

navMenu.classList.remove('main-nav--nojs');

  buttonOpen.addEventListener('click', function() {
    if (navMenu.classList.contains('main-nav--closed')) {
      navMenu.classList.remove('main-nav--closed');
      navMenu.classList.add('main-nav--opened');
    } else {
      navMenu.classList.add('main-nav--closed');
      navMenu.classList.remove('main-nav--opened');
    }
});
