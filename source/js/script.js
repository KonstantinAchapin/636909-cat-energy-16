//Открытие-закрытие мобильного меню

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

//Смена картинки с помощью input-range
function revealImage() {
  size = document.querySelector(".usage-example__range").value;
  imgFirst = document.querySelector(".usage-example__image--before");
  imgFirst.style.clip = "rect(0px, " + (size) + "px, auto, 0px)";
  imgSecond = document.querySelector(".usage-example__image--after");
  imgSecond.style.clip = "rect(0px, auto, auto, " + (size) + "px)";
}
