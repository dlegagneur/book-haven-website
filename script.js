document.addEventListener("DOMContentLoaded", function () {

    // Subscribe Button
    const subscribeBtn = document.getElementById("subscribeBtn");

    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            alert("Thank you for subscribing.");
        });
    }

    // Add to Cart Buttons
    const addCartButtons = document.querySelectorAll(".addCartBtn");

    addCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Item added to the cart.");
        });
    });

    // Clear Cart Buttons
    const clearCartButtons = document.querySelectorAll(".clearCartBtn");

    clearCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Cart cleared.");
        });
    });

    // Process Order Button
    const processOrderBtn = document.getElementById("processOrderBtn");

    if (processOrderBtn) {
        processOrderBtn.addEventListener("click", function () {
            alert("Thank you for your order.");
        });
    }

});
// Contact Form Submission Alert
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message.");
    });
}
