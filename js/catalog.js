
var buyLink = document.querySelectorAll(".item-buy");

var cartPopup = document.querySelector(".popcart");
var cartClose = cartPopup.querySelector(".close");

buyLink.forEach(function (lnk) {
  lnk.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("popup-show");
  })
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("popup-show");
    }
  }
});
