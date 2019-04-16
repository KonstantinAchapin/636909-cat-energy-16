//Открытие-закрытие мобильного меню

var buttonOpen = document.querySelector(".page-header__nav-toggle");
var navMenu = document.querySelector(".main-nav");

navMenu.classList.remove('main-nav--nojs');

buttonOpen.addEventListener('click', function() {
  if (navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
    buttonOpen.classList.add('page-header__nav-toggle--opened');
  } else {
    navMenu.classList.add('main-nav--closed');
    navMenu.classList.remove('main-nav--opened');
    buttonOpen.classList.remove('page-header__nav-toggle--opened');
  }
});

//Смена картинки с помощью input-range

function revealImage() {
  size = document.querySelector(".usage-example__range").value;
  imgFirst = document.querySelector(".usage-example__image--after");
  imgFirst.style.clip = "rect(0px, " + (size) + "px, auto, 0px)";
  imgSecond = document.querySelector(".usage-example__image--before");
  imgSecond.style.clip = "rect(0px, auto, auto, " + (size) + "px)";
}

//JS для яндекс карт
ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.938787, 30.323164],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.939425, 30.322500], {
      hintContent: '',
      balloonContent: '',
      iconContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-pin.png',
      // Размеры метки.
      iconImageSize: [62, 53],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, 0],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [0, 0],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
  myMap.behaviors.disable('scrollZoom');
});
