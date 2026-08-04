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

// console.log(cart);
function renderCart() {
const container = document.querySelector(".cart-product-info");

container.innerHTML = "";

cart.forEach((item, index) => {
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
                <button class="cart-minus" data-index="${index}">
                        <i class="ri-subtract-line"></i>
                    </button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-plus" data-index="${index}">
                        <i class="ri-add-line"></i>
                    </button>
            </div>

            <div class="cart-product-info-delete">
                <p>${item.price * item.quantity}</p>
                    <i class="ri-delete-bin-line delete-btn" data-id="${index}"></i>
               </div>
        </div>

    </div>

    `;
});


// Total & Sub Total Price
let subtotal = 0;
cart.forEach(item=>{
    subtotal += item.price * item.quantity;
});

document.querySelector(".subtotal").innerText =
"₹"+subtotal;

document.querySelector(".cart-total-amount").innerText =
"₹"+(subtotal-500);

}

renderCart();

// Increse & decrease quantity 
    // plus button 
document.addEventListener("click",(e)=>{
    if(e.target.closest(".cart-plus")){
        const index = e.target.closest(".cart-plus").dataset.index;

        cart[index].quantity++;

        localStorage.setItem("cart",JSON.stringify(cart));

        renderCart();
    }
});

    // Minus Button 
document.addEventListener("click",(e)=>{
    if(e.target.closest(".cart-minus")){
        const index = e.target.closest(".cart-minus").dataset.index;

        if(cart[index].quantity>1){
            cart[index].quantity--;
        }

        localStorage.setItem("cart",JSON.stringify(cart));

        renderCart();
    }
});

// <!--========================= Delete item from cart ==========================-->

const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const id = btn.dataset.id;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart = cart.filter(item => item.id !== id);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});