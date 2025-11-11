import { products } from "./product.js";
import { cart, addToCart, removeFromCart, clearCart } from "./cart.js";

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout");

function displayProducts() {
  productContainer.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").addEventListener("click", () => {
      addToCart(p);
      displayCart();
    });
    productContainer.appendChild(div);
  });
}

function displayCart() {
  cartContainer.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeFromCart(i);
      displayCart();
    });
    li.appendChild(removeBtn);
    cartContainer.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalDisplay.textContent = total;
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Checkout successful!");
    clearCart();
    displayCart();
  }
});

displayProducts();
displayCart();
