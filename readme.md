How did you dynamically create and append new elements to the DOM?
    I created new cart items using the document.createElement() method to generate a new <li> element whenever a user clicked an “Add to Cart” button. After assigning it a class and inner HTML structure containing the product name, price, and a remove button, I used appendChild() to add the new element to the existing unordered list (cartItemsList).

What steps did you take to ensure accurate updates to the total price?
    I created a reusable updateTotalPrice() function that adds or subtracts the item’s price from a totalPrice variable.

How did you handle invalid input for product name or price?
    To prevent errors, I used "data" attribututes defined in the HTML for each product, which guaranteed valid inputs for both name and price. I also converted price values using parseFloat() before performing calculations. If either attribute were missing or invalid, the script would simply not append the item, avoiding any corrupt data in the cart or inaccurate totals.

What challenges did you face when implementing the remove functionality?
    One challenge was ensuring that removing an item not only deleted the list element from the DOM but also accurately updated the total price and re-checked whether the cart was empty. I solved this by using event delegation: listening for clicks on the parent list and checking if the target had the remove-btn class. Then, I used closest("li") to identify the correct item, subtract its price, and remove it. Another small issue was making sure the “Cart is empty” message reappeared when the last item was deleted, which I fixed by calling emptyMessage() after every removal.

