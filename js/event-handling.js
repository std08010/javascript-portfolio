let elFeedback = document.getElementById("feedback"); // Get feedback element

function giveFeedbackForUsername(minLength, fieldLength) {
  if (fieldLength < minLength) {
    // If username too short
    elFeedback.textContent = "Username must be " + minLength + " characters or more"; // Set msg
  } else {
    elFeedback.textContent = ""; // Clear message
  }
}

/*
 * Event Attributes
 */
let elUsernameEventAttribute = document.getElementById("usernameEventAttribute"); // Get username input

function checkUsernameWithEventAttribute() {
  giveFeedbackForUsername(5, elUsernameEventAttribute.value.length);
}

/*
 * Event Handlers
 */

function checkUsernameWithEventHandler() {
  giveFeedbackForUsername(5, this.value.length);
}

let elUsernameEventHandler = document.getElementById("usernameEventHandler"); // Get username input
elUsernameEventHandler.onblur = checkUsernameWithEventHandler; // When it loses focus call checkUsernameWithEventHandler()

/*
 * Event Listeners
 */

function checkUsernameWithEventListener() {
  giveFeedbackForUsername(5, this.value.length);
}

let elUsernameEventListener = document.getElementById("usernameEventListener"); // Get username input
// When it loses focus call checkUsernameWithEventListener()
addCustomEventListener(elUsernameEventListener, "blur", checkUsernameWithEventListener);

/*
 * Event Listeners with parameters
 */
let elUsernameEventListenerWithParams = document.getElementById("usernameEventListenerWithParams");

function checkUsernameWithEventListenerWithParams(minLength) {
  giveFeedbackForUsername(minLength, elUsernameEventListenerWithParams.value.length);
}

addCustomEventListener(elUsernameEventListenerWithParams, "blur", function () {
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

addCustomEventListener(elUsernameEventListenerWithEventObject, "blur", function (e) {
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
addCustomEventListener(elShoppingList, "click", function (e) {
  itemDone(e); // It calls itemDone()
});

/*
 * Various Types of Events
 */

/*
 * Load Event
 */
let elUsername = document.getElementById("username"); // Username input

function setup() {
  elUsername.focus(); // Give username focus
}

addCustomEventListener(window, "load", setup); // When page loaded call setup()

/*
 * Focus & Blur Events
 */

function checkUsername() {
  let username = elUsername.value; // Store username in variable
  if (username.length < 5) {
    // If username < 5 characters
    elFeedback.className = "warning"; // Change class on message
    elFeedback.textContent = "Not long enough, yet..."; // Update message
  } else {
    elFeedback.className = "";
    elFeedback.textContent = ""; // Clear the message
  }
}

function tipUsername() {
  elFeedback.className = "tip"; // Change class for message
  elFeedback.innerHTML = "Username must be at least 5 characters"; // Add message
}

// When the username input gains / loses focus call functions above:
addCustomEventListener(elUsername, "focus", tipUsername); // focus call tipUsername()
addCustomEventListener(elUsername, "blur", checkUsername); // blur call checkUsername()

/*
 * Mouse-Click Event
 */

// Create the HTML for the message
let popupMsg = '<div class="header"><a id="close" href="#">close X</a></div>';
popupMsg += "<div><h2>System Maintenance</h2>";
popupMsg += "Our servers are being updated between 3 and 4 a.m. ";
popupMsg += "During this time, there may be minor disruptions to service.</div>";

let elNote = document.createElement("div"); // Create a new element
elNote.setAttribute("id", "note"); // Add an id of note
elNote.innerHTML = popupMsg; // Add the message
document.body.appendChild(elNote); // Add it to the page

function dismissNote() {
  // Declare function
  document.body.removeChild(elNote); // Remove the note
}

let elClose = document.getElementById("close"); // Get the close button
addCustomEventListener(elClose, "click", dismissNote); // Click close-clear note

/*
 * Mouse-Move Event
 *
 * it is triggered only when the cursor is inside the browser window
 */

let sx = document.getElementById("sx"); // Element to hold screenX
let sy = document.getElementById("sy"); // Element to hold screenY
let px = document.getElementById("px"); // Element to hold pageX
let py = document.getElementById("py"); // Element to hold pageY
let cx = document.getElementById("cx"); // Element to hold clientX
let cy = document.getElementById("cy"); // Element to hold clientY

function showPosition(event) {
  sx.value = event.screenX; // Update element with screenX
  sy.value = event.screenY; // Update element with screenY
  px.value = event.pageX; // Update element with pageX
  py.value = event.pageY; // Update element with pageY
  cx.value = event.clientX; // Update element with clientX
  cy.value = event.clientY; // Update element with clientY
}

let elBody = document.getElementById("body"); // Get body Element
addCustomEventListener(elBody, "mousemove", showPosition); // Move updates position

/*
 * Keyboard Events
 */

let elKEMessage = document.getElementById("message"); // User input area
let charactersLeft = document.getElementById("charactersLeft"); // Counter
let lastKey = document.getElementById("lastKey"); // Last key
let lastKeyAscii = document.getElementById("lastKeyAscii"); // Last key in ASCII

function charCount(e) {
  let textEntered = elKEMessage.value; // User's text

  let counter = 180 - textEntered.length; // Num of chars left
  charactersLeft.textContent = counter; // Show chars left

  lastKeyAscii.textContent = "Last key in ASCII code: " + e.keyCode;
  lastKey.textContent = "Last key: " + String.fromCharCode(e.keyCode);
}

addCustomEventListener(elKEMessage, "keyup", charCount); // on keyup - call charCount()

/*
 * Form Events
 */

//
// TIP: Don't declare element variables inside functions because then
// each time the function is called a new variable will be initialised
// (inside the scope of the function but still costly)
// so performance will decrease.
// So declare all element varriables once at the top so you can access them wherever you want.
//
let elForm = document.getElementById("formSignup"); // Store elements
let elSelectPackage = document.getElementById("package");
let elPackageHint = document.getElementById("packageHint");
let elTerms = document.getElementById("terms");
let elTermsHint = document.getElementById("termsHint");

function packageHint() {
  //the options and selectedIndex variables are properties of the "select" object
  //and when packageHint is called on that object then these two values get initialised
  //so by using "this" we refere to the "select" object.
  //Alternatively we could use elSelectPackage.options and elSelectPackage.selectedIndex
  let pack = this.options[this.selectedIndex].value; // Get selected option

  if (pack === "monthly") {
    elPackageHint.innerHTML = "Save $10 if you pay for 1 year!";
  } else {
    elPackageHint.innerHTML = "Wise choice!";
  }
}

function checkTerms(event) {
  if (!elTerms.checked) {
    // If checkbox is not ticked
    elTermsHint.innerHTML = "You must agree to the terms."; // Show message
    event.preventDefault(); // Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
addCustomEventListener(elForm, "submit", checkTerms);
addCustomEventListener(elSelectPackage, "change", packageHint);
