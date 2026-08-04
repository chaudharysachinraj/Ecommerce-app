const cartPageBackBtn = document.querySelector(".cart-back-shopping-btn");

cartPageBackBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Checkout Button
const checkoutBtn = document.querySelector(".cart-payment-info button");

checkoutBtn.addEventListener("click", () => {
  window.location.href = "checkout.html";
});


// Add to cart products 
const cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

const container = document.querySelector(".cart-product-info");

container.innerHTML = "";

cart.forEach((item) => {
  container.innerHTML += `
    
    <div class="cart-product-info-container">
        <div class="cart-product-info-text">
            <img src="${item.image}" alt="">
            <div>
                <h2>${item.name}</h2>
                <p>₹${item.price}</p>
            </div>
        </div>

        <div class="cart-product-info-quantity">

            <div class="quantity">
                <button class="cart-minus">
                        <i class="ri-subtract-line"></i>
                    </button>
                    <span class="cart-qty">1</span>
                    <button class="cart-plus">
                        <i class="ri-add-line"></i>
                    </button>
            </div>

            <div class="cart-product-info-delete">
                <p>${item.price}</p>
                    <i class="ri-delete-bin-line"></i>
               </div>
        </div>

    </div>

    `;
});



// Increse & decrease quantity 
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Plus Click");
  });
});

minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Minus Click");
  });
});
