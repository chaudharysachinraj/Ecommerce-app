//  ======================================
//              CART DATA
// ======================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryProducts = document.querySelector(".summary-products");
const subtotal = document.querySelector(".subtotal");
const total = document.querySelector(".total-price");
const cartCount = document.querySelector(".cartBtn");

const SHIPPING = 0;
const DISCOUNT = 500;

// ======================================
// UPDATE HEADER COUNT
// ======================================

function updateCartCount() {
  let count = 0;

  cart.forEach((item) => {
    count += item.quantity;
  });

  cartCount.innerText = count;
}

// ======================================
// ORDER SUMMARY
// ======================================

function renderSummary() {
  summaryProducts.innerHTML = "";

  let subtotalPrice = 0;

  cart.forEach((item) => {
    subtotalPrice += item.price * item.quantity;

    summaryProducts.innerHTML += `

        <div class="summary-product">
            <div class="summary-product-text">
                <img src="${item.image}" alt="">

                <div>

                    <h4>${item.name}</h4>

                    <p>Qty : ${item.quantity}</p>

                </div>
            </div>

            <div>
                <span>₹${item.price * item.quantity}</span>
            </div>

        </div>

        `;
  });

  subtotal.innerText = "₹" + subtotalPrice;

  total.innerText = "₹" + (subtotalPrice + SHIPPING - DISCOUNT);
}

renderSummary();

updateCartCount();

// ======================================
// PAYMENT METHOD
// ======================================

const paymentCards = document.querySelectorAll(".payment-card");

paymentCards.forEach((card) => {
  card.addEventListener("click", () => {
    paymentCards.forEach((item) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    card.querySelectorAll("input").checked = true;
  });
});



// ======================================
// PLACE ORDER
// ======================================

const placeOrderBtns = document.querySelector(".place-order-btn");
placeOrderBtns.addEventListener("click", () => {
  window.location.href = "order-success.html";
});