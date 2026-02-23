document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // ADD TO CART (sessionStorage)
    // ==============================
    const addCartButtons = document.querySelectorAll(".addCartBtn");

    addCartButtons.forEach(function(button) {
        button.addEventListener("click", function () {

            const itemName = this.parentElement.querySelector("h3").textContent;

            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

            cart.push(itemName);

            sessionStorage.setItem("cart", JSON.stringify(cart));

            alert("Item added to the cart.");
        });
    });


    // ==============================
    // CLEAR CART
    // ==============================
    const clearCartButtons = document.querySelectorAll(".clearCartBtn");

    clearCartButtons.forEach(function(button) {
        button.addEventListener("click", function () {

            sessionStorage.removeItem("cart");

            const cartItemsList = document.getElementById("cartItems");
            if (cartItemsList) {
                cartItemsList.innerHTML = "";
            }

            alert("Your cart has been cleared.");
        });
    });


    // ==============================
    // VIEW CART (Modal)
    // ==============================
    const viewCartBtn = document.getElementById("viewCartBtn");
    const cartModal = document.getElementById("cartModal");
    const closeCart = document.getElementById("closeCart");
    const cartItemsList = document.getElementById("cartItems");

    if (viewCartBtn) {
        viewCartBtn.addEventListener("click", function () {

            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

            cartItemsList.innerHTML = "";

            if (cart.length === 0) {
                cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
            } else {
                cart.forEach(function(item) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    cartItemsList.appendChild(li);
                });
            }

            cartModal.style.display = "block";
        });
    }

    if (closeCart) {
        closeCart.addEventListener("click", function () {
            cartModal.style.display = "none";
        });
    }


    // ==============================
    // PROCESS ORDER
    // ==============================
    const processOrderBtn = document.getElementById("processOrderBtn");

    if (processOrderBtn) {
        processOrderBtn.addEventListener("click", function () {

            sessionStorage.removeItem("cart");

            alert("Thank you for your order!");

        });
    }


    // ==============================
    // CONTACT FORM → localStorage
    // ==============================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const orderData = {
                customerName: name,
                customerEmail: email,
                orderDetails: message
            };

            localStorage.setItem("customOrder", JSON.stringify(orderData));

            alert("Custom order submitted successfully.");

            contactForm.reset();
        });
    }


    // ==============================
    // SUBSCRIBE BUTTON ALERT
    // ==============================
    const subscribeBtn = document.getElementById("subscribeBtn");

    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            alert("Thank you for subscribing.");
        });
    }

});
