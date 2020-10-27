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

// Get the element that has an id of greeting
let elEx = document.getElementById("greeting");
// Replace the content of that element with the personalized welcome message
elEx.textContent = welcomeEx;

// Get the element that has an id of userSign then update its contents
let elSignEx = document.getElementById("userSign");
elSignEx.textContent = signEx;

// Get the element that has an id of tiles then update its contents
let elTilesEx = document.getElementById("tiles");
elTilesEx.textContent = tilesEx;

// Get the element that has an id of subTotal then update its contents
let elSubTotalEx = document.getElementById("subTotal2");
elSubTotalEx.textContent = "$" + subTotalEx;

// Get the element that has an id of shipping then update its contents
let elShippingEx = document.getElementById("shipping2");
elShippingEx.textContent = "$" + shippingEx;

// Get the element that has an id of grandTotal then update its contents
let elGrandTotalEx = document.getElementById("grandTotal");
elGrandTotalEx.textContent = "$" + grandTotalEx;
