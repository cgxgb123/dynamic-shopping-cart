const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const addProductBtn = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceS = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let totalPrice = 0;

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
