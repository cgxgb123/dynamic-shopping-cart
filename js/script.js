const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const totalPriceS = document.getElementById("total-price");
const cartToggle = document.getElementById("cart-toggle");
const mobileOverlay = document.getElementById("mobile-overlay");
const cartModal = document.getElementById("cart-modal");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const empty = document.getElementById("empty");

let totalPrice = 0;
// display cart is empty message if cart items list is empty
function emptyMessage() {
  if (cartItemsList.children.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }
}

// Show cart when clicked
cartToggle.addEventListener("click", () => {
  cartModal.classList.add("show");
  cartOverlay.classList.add("show");
});

// hide cart when clicking the close button or outside area
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
    emptyMessage();
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
  emptyMessage();
}
//removes items on btn click in modal
cartItemsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    removeItem(event);
  }
});
