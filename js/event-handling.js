/*
 * Event Attributes
 */

function checkUsernameWithEventAttribute() {
  let elMsg = document.getElementById("feedback"); // Get feedback element
  let elUsername = document.getElementById("usernameEventAttribute"); // Get username input
  if (elUsername.value.length < 5) {
    // If username too short
    elMsg.textContent = "Username must be 5 characters or more"; // Set msg
  } else {
    elMsg.textContent = ""; // Clear message
  }
}

/*
 * Event Handlers
 */
function checkUsernameWithEventHandler() {
  let elMsg = document.getElementById("feedback"); // Get feedback element
  if (this.value.length < 5) {
    // If username too short
    elMsg.textContent = "Username must be 5 characters or more"; // Set msg
  } else {
    elMsg.textContent = ""; // Clear message
  }
}

let elUsernameEventHandler = document.getElementById("usernameEventHandler"); // Get username input
elUsernameEventHandler.onblur = checkUsernameWithEventHandler; // When it loses focus call checkUsernameWithEventHandler()

/*
 * Event Listeners
 */

function checkUsernameWithEventListener() {
  let elMsg = document.getElementById("feedback"); // Get feedback element
  if (this.value.length < 5) {
    // If username too short
    elMsg.textContent = "Username must be 5 characters or more"; // Set msg
  } else {
    // Otherwise
    elMsg.textContent = ""; // Clear msg
  }
}

let elUsernameEventListener = document.getElementById("usernameEventListener"); // Get username input
// When it loses focus call checkUsername()
elUsernameEventListener.addEventListener("blur", checkUsernameWithEventListener, false);

/*
 * Event Listeners with parameters
 */

function checkUsernameWithEventListenerWithParams(minLength) {
  let elMsg = document.getElementById("feedback"); // Error msg element
  if (elUsernameEventListenerWithParams.value.length < minLength) {
    // If username too short
    // Set the error message
    elMsg.innerHTML = "Username must be " + minLength + " characters or more";
  } else {
    // Otherwise
    elMsg.innerHTML = ""; // Clear msg
  }
}

let elUsernameEventListenerWithParams = document.getElementById("usernameEventListenerWithParams");

addEventListener(elUsernameEventListenerWithParams, "blur", function () {
  // When it loses focus
  checkUsernameWithEventListenerWithParams(6); // Pass argument here
});

/*
 * Event Listeners with event object
 */
function checkUsernameWithEventListenerWithEventObject(e, minLength) {
  let el = getEventTarget(e); // Get target of event
  //Make sure that input and div don't have any white space between them because
  //nextSibling will return the whitespace element and not the feedback div
  let elMsg = el.nextSibling; // Get its next sibling

  if (el.value.length < minLength) {
    // If length is too short set msg
    elMsg.innerHTML = "Username must be " + minLength + " characters or more";
  } else {
    // Otherwise
    elMsg.innerHTML = ""; // Clear message
  }
}

var elUsernameEventListenerWithEventObject = document.getElementById("usernameEventListenerWithEventObject"); // Get username input

addEventListener(elUsernameEventListenerWithEventObject, "blur", function (e) {
  // When it loses focus
  checkUsernameWithEventListenerWithEventObject(e, 7); // Pass argument here
});

/*
 * Event Delegation
 */

// Remove item from the list
function itemDone(e) {
  let target = getEventTarget(e); // Get the item clicked link

  /*
    The following code has two shortcomings
    - Clicking between list items would remove the whole list
    - Clicking on italic text would remove the link - not the list item
  
    let elListItem = target.parentNode;
    let elList = elListItem.parentNode;
    elList.removeChild(elListItem);
  
    The next lines improve the above code
    */

  if (target.nodeName.toLowerCase() == "a") {
    // If user clicked on an a element
    removeElementFromList(target.parentNode);
  } else if (target.nodeName.toLowerCase() == "em") {
    // If the user clicked on an em element
    removeElementFromList(target.parentNode.parentNode);
  }

  // Prevent the link from taking you elsewhere
  preventDefault(e);
}

// Set up event listeners to call itemDone() on click
let elShoppingList = document.getElementById("shoppingList"); // Get shopping list

// Add listener on click
addEventListener(elShoppingList, "click", function (e) {
  itemDone(e); // It calls itemDone()
});
