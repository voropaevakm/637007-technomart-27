
  var feedLink = document.querySelector(".write-us");

  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".close");

  var form = popup.querySelector("form");
  var user = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");

  var isStorageSupport = true;
  var storage = "";

  var mapLink = document.querySelector(".map-link");

  var mapPopup = document.querySelector(".map");
  var mapClose = mapPopup.querySelector(".close");

  var buyLink = document.querySelectorAll(".item-buy");

  var cartPopup = document.querySelector(".popcart");
  var cartClose = cartPopup.querySelector(".close");

  try {
    storage = localStorage.getItem("user");
  } catch (err) {
    isStorageSupport = false;
  }

  feedLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");

    if (storage) {
      user.value = storage;
      email.focus();
    } else {
      user.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("feedback-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!user.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("feedback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user", user.value);
      }
    }
  });

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

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
        evt.preventDefault();
        popup.classList.remove("popup-show");
        mapPopup.classList.remove("popup-show");
        cartPopup.classList.remove("popup-show");
    }
  });
