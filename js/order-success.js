const orderId = document.getElementById("order-id");
const orderDate = document.getElementById("order-date");
const deliveryDate = document.getElementById("delivery-date");
const invoiceBtn = document.querySelector(".invoice-btn");

// GENERATE ORDER ID

const randomId = "#SZ" + Math.floor(Math.random() * 900000 + 100000);

orderId.textContent = randomId;

// CURRENT DATE

const today = new Date();

orderDate.innerText = today.toLocaleDateString("en-IN", {
  day: "numeric",

  month: "long",

  year: "numeric",
});

// DELIVERY DATE
const delivery = new Date();

delivery.setDate(delivery.getDate() + 5);

deliveryDate.innerText = delivery.toLocaleDateString("en-IN", {
  day: "numeric",

  month: "long",

  year: "numeric",
});

// DOWNLOAD INVOICE

invoiceBtn.addEventListener("click", () => {
  window.print();
});

// CLEAR CART

localStorage.removeItem("cart");

// SIMPLE ANIMATION

const card = document.querySelector(".success-card");

card.animate(
  [
    {
      transform: "scale(.8)",

      opacity: 0,
    },

    {
      transform: "scale(1)",

      opacity: 1,
    },
  ],

  {
    duration: 600,

    easing: "ease",
  },
);
