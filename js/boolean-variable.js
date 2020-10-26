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
