/*assign a function directly to a variable and then
use that variable to call the function */
var doMath = function (num1, num2) {
    var result = num1 + num2;
    return result;
};

var myResult = doMath(2, 3);

/* */
function message() {
    return "It's. the information age ";
}

function displayMessage(msgFunction, person) {
    console.log(msgFunction() + person) //It’s the information age brother!
}

displayMessage(message, "brother!");

function equalArrays(a, b) {
  if (a === b) return true; // Identical arrays are equal
  
  if (a.length !== b.length) return false; // Different-size arrays not equal
  
  for (let i = 0; i < a.length; i++) {
    // Loop through all elements
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
  }
  
  return true; // Otherwise they are equal
}