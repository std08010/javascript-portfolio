// Create a variable for the subtotal and make a calculation
let subtotal = (13 + 1) * 5; // Subtotal is 70

// Create a variable for the shipping and make a calculation
let shippingAmount = 0.5 * (13 + 1); // Shipping is 7

// Create the total by combining the subtotal and shipping values
let totalAmount = subtotal + shippingAmount; // Total is 77

// Write the results to the screen
var elSub = document.getElementById("subtotal");
elSub.textContent = subtotal;

var elShip = document.getElementById("shippingAmount");
elShip.textContent = shippingAmount;

var elTotal = document.getElementById("total");
elTotal.textContent = totalAmount;
