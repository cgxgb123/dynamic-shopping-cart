const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const totalPriceS = document.getElementById("total-price");
const cartToggle = document.getElementById("cart-toggle");
const mobileOverlay = document.getElementById("mobile-overlay");
const cartModal = document.getElementById("cart-modal");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");

let totalPrice = 0;

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

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.closest("[data-name]");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    // Create new cart list item
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border-b py-2";
    li.dataset.price = price;
    li.innerHTML = `
      <span>${name} - $${price.toFixed(2)}</span>
      <button class="remove-btn text-red-500 hover:text-red-700 text-sm">Remove</button>
    `;

    // Add to list and update total
    cartItemsList.appendChild(li);
    updateTotalPrice(price);
  });
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
