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