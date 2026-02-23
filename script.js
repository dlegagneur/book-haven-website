document.addEventListener("DOMContentLoaded", function () {

  const subscribeBtn = document.getElementById("subscribeBtn");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  }

  const addCartButtons = document.querySelectorAll(".addCartBtn");

  addCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Item added to the cart.");
    });
  });

  const clearCartButtons = document.querySelectorAll(".clearCartBtn");

  clearCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Your cart has been cleared.");
    });
  });

  const processOrderBtn = document.getElementById("processOrderBtn");

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      alert("Thank you for your order.");
    });
  }

});
