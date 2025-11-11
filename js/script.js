const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const totalPriceS = document.getElementById("total-price");
const cartToggle = document.getElementById("cart-toggle");
const mobileOverlay = document.getElementById("mobile-overlay");
const cartModal = document.getElementById("cart-modal");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

let totalPrice = 0;
let cartItems = {};

// Show cart when clicked
cartToggle.addEventListener("click", () => {
  cartModal.classList.add("show");
  cartOverlay.classList.add("show");
});

// Hide cart when clicking the close button or outside area
closeCart.addEventListener("click", () => {
  cartModal.classList.remove("show");
  cartOverlay.classList.remove("show");
});

cartOverlay.addEventListener("click", () => {
  cartModal.classList.remove("show");
  cartOverlay.classList.remove("show");
});

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceS.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
