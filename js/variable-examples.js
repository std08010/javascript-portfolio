/*
 * Numeric Variable
 */
// Create three variables to store the information needed.
// Assign values to the price and quantity variables.
let price = 5;
let quantity = 14;
// Calculate the total by multiplying the price by quantity.
let total = price * quantity;

updateContent("cost", "$" + total);

/*
 * String Variable
 */
// Create variables to hold the name and note text and assign initial values.
let username = "Altin";
let message = "See our upcoming range";

updateContent("name", username);
updateContent("note", message);

let title = "Altin's Special Offers";
//let note2 = "<a href=\"construction-page.html\">25% off!</a>";
let note2 = '<a href="construction-page.html">25% off!</a>';

updateInnerHTML("title2", title);
updateInnerHTML("note2", note2);

/* String Operator */

// Store the greeting in a variable
var greeting = "Hello ";

// Create the welcome message by concatenating the strings in the two variables
var welcomeMessage = greeting + username + "!";

updateContent("title", welcomeMessage);

/*
 * Boolean Variable
 */
let inStock = true;
let shipping = false;

updateAvailabilities(inStock, shipping);

/* Some other processing might go here and, as a result, 
the script might need to change these values.
Here we wait 5 seconds and then we update the variables. */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const waitSomeTime = async () => {
  await delay(5000);
  console.log("Waited 5s");

  inStock = false;
  shipping = true;

  updateAvailabilities(inStock, shipping);
};
waitSomeTime();

function updateAvailabilities(inStockValue, shippingValue) {
  // Get the element that has an id of stock
  var elStock = document.getElementById("stock");
  // Set class name with value of inStock variable
  elStock.className = inStockValue;

  // Get the element that has an id of shipping
  var elShip = document.getElementById("shipping");
  // Set class name with value of shipping variable
  elShip.className = shippingValue;
}

/*
 * Array Variable
 */
// Create an array and assign it values.
let colors = ["white", "black", "custom"];
// let colors = new Array("white", "black", "custom");

// Show the first item from the array.
updateContent("colors", colors[0]);

//Update array element
colors[2] = "beige";
updateContent("colors", colors[2]);

/*
 * Arithmetic Operations
 */
// Create a variable for the subtotal and make a calculation
let subtotal = (13 + 1) * 5; // Subtotal is 70

// Create a variable for the shipping and make a calculation
let shippingAmount = 0.5 * (13 + 1); // Shipping is 7

// Create the total by combining the subtotal and shipping values
let totalAmount = subtotal + shippingAmount; // Total is 77

// Write the results to the screen
updateContent("subtotal", subtotal);
updateContent("shippingAmount", shippingAmount);
updateContent("total", totalAmount);

/*
 * Generic example
 */
// Create variables for the welcome message
let greetingEx = "Howdy ";
let nameEx = "Altin";
let messageEx = ", please check your order:";
// Concatenate the three variables above to create the welcome message
let welcomeEx = greetingEx + nameEx + messageEx;

// Create variables to hold details about the sign
let signEx = "Montague House";
let tilesEx = signEx.length;
let subTotalEx = tilesEx * 5;
let shippingEx = 7;
let grandTotalEx = subTotalEx + shippingEx;

updateContent("greeting", welcomeEx);
updateContent("userSign", signEx);
updateContent("tiles", tilesEx);
updateContent("subTotal2", "$" + subTotalEx);
updateContent("shipping2", "$" + shippingEx);
updateContent("grandTotal", "$" + grandTotalEx);

/*
 * Functions
 */
// Create a function to update the content of the element whose id attribute has a value of elementID
function updateContent(elementID, msg) {
  // Get the element with an id of elementID.
  var el = window.document.getElementById(elementID);
  // Replace the content of this element.
  el.textContent = msg;
}

// Create a function to update the inner HTML of the element whose id attribute has a value of elementID
function updateInnerHTML(elementID, msg) {
  var el = document.getElementById(elementID);
  el.innerHTML = msg;
}
