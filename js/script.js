// <!--========================= Cart SECTION ==========================-->
const cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// <!--========================= Product SECTION ==========================-->

//  Open product info
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "product.html";
  });
});

document.querySelectorAll(".wishlist").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll(".cart-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

  });
});


// <!--========================= Add to Cart Code ==========================-->

const cartBtns = document.querySelectorAll(".cart-btn");

cartBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{

        e.stopPropagation();

        const product = btn.closest(".product-card");

        const item = {

            id: product.dataset.id,
            name: product.dataset.name,
            price: Number(product.dataset.price),
            image: product.dataset.image,
            quantity: 1

        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find((p) => p.id === item.id);

        if(existingItem){

            existingItem.quantity++;

        }else{

            cart.push(item);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // console.log(cart);

    });

});