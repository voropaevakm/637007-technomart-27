var feedLink=document.querySelector(".write-us"),popup=document.querySelector(".feedback"),close=popup.querySelector(".close"),form=popup.querySelector("form"),user=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="",mapLink=document.querySelector(".map-link"),mapPopup=document.querySelector(".map"),mapClose=mapPopup.querySelector(".close"),buyLink=document.querySelectorAll(".item-buy"),cartPopup=document.querySelector(".popcart"),cartClose=cartPopup.querySelector(".close");try{storage=localStorage.getItem("user")}catch(e){isStorageSupport=!1}feedLink.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("popup-show"),storage?(user.value=storage,email.focus()):user.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("popup-show"),popup.classList.remove("feedback-error")}),form.addEventListener("submit",function(e){user.value&&email.value?isStorageSupport&&localStorage.setItem("user",user.value):(e.preventDefault(),popup.classList.remove("feedback-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("feedback-error"))}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("popup-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("popup-show")}),buyLink.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("popup-show")})}),cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("popup-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.remove("popup-show"),mapPopup.classList.remove("popup-show"),cartPopup.classList.remove("popup-show"))});
