//Псевдо открытие модального окна
var catalogButton = document.querySelectorAll(".catalog-list__toggle");

var clickButton = function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    alert("Открылось модальное окно");
  });
};

for (var i = 0; i <= catalogButton.length; i++) {
  clickButton(catalogButton[i]);
}
