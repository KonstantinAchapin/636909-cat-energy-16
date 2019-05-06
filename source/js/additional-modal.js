//Псевдо открытие модального окна доп товаров
var additionalButton = document.querySelectorAll(".additional-goods__toggle");

var clickButton = function(button) {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    alert("Открылось модальное окно");
  });
};

for (var i = 0; i <= additionalButton.length; i++) {
  clickButton(additionalButton[i]);
}
