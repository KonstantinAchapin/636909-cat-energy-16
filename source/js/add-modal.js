//Псевдо загрузка по ajax новых товаров

var catalogAddButton = document.querySelector(".catalog-add__toggle");

catalogAddButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  alert("Загрузились новые товары по ajax");
});
