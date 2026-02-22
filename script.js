document.addEventListener("DOMContentLoaded", function () {
  const subscribeBtn = document.getElementById("subscribeBtn");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {

  const addCartButtons = document.querySelectorAll(".addCartBtn");

  addCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Item added to the cart.");
    });
  });

});
const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("Your cart has been cleared.");
  });
}
