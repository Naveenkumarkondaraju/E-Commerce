export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(product) {
  cart.push(product);
  saveCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
  cart = [];
  saveCart();
}