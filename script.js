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
const addCartButtons = document.querySelectorAll(".addCartBtn");

addCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const itemName = this.parentElement.querySelector("h3").textContent;

        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        cart.push(itemName);

        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to the cart.");
    });
});
const viewCartBtn = document.getElementById("viewCartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsList = document.getElementById("cartItems");

if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {

        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        cartItemsList.innerHTML = "";

        cart.forEach(function(item) {
            const li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
        });

        cartModal.style.display = "block";
    });
}

if (closeCart) {
    closeCart.addEventListener("click", function () {
        cartModal.style.display = "none";
    });
}
const addCartButtons = document.querySelectorAll(".addCartBtn");

addCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const itemName = this.parentElement.querySelector("h3").textContent;

        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        cart.push(itemName);

        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to the cart.");
    });
});
