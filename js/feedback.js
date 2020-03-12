
  var feedLink = document.querySelector(".write-us");

  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".close");

  var form = popup.querySelector("form");
  var user = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");

  var isStorageSupport = true;
  var storage = "";

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

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("popup-show")) {
        evt.preventDefault();
        popup.classList.remove("popup-show");
        popup.classList.remove("feedback-error");
      }
    }
  });
