// Create three variables to store the information needed.
// Assign values to the price and quantity variables.
let price = 5;
let quantity = 14;
// Calculate the total by multiplying the price by quantity.
let total = price * quantity;

// Get the element with an id of cost and chenge the text displayed there.
let elCost = document.getElementById("cost");
elCost.textContent = "$" + total;