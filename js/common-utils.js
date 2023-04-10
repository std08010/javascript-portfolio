/*
 * Create a function to update the content of the element whose id attribute
 * has a value of elementID
 */
function updateContent(elementID, msg) {
  // Get the element with an id of elementID.
  let el = window.document.getElementById(elementID);
  // Replace the content of this element.
  el.textContent = msg;
}

/*
 * Create a function to update the inner HTML of the element whose id attribute
 * has a value of elementID
 */
function updateInnerHTML(elementID, msg) {
  let el = document.getElementById(elementID);
  el.innerHTML = msg;
}

/*
 * Create a function to update the class of the element whose id attribute
 * has a value of elementID
 */
function updateClass(elementID, classValue) {
  // Select the element and store it in a variable.
  let el = this.document.getElementById(elementID);
  // Change the value of the class attribute.
  el.className = classValue;
}

/*
 * return a reference to the element the event happened on.
 * for IE8 support
 */
function getEventTarget(e) {
  //In IE e object is null and has to be taken from window object.
  if (!e) {
    e = window.event;
  }

  //target is in other browsers and srcElement is in IE
  return e.target || e.srcElement;
}

/*
 * prevent the default behavior of an event.
 * for IE8 support.
 * 
 * e.g. Prevent a link from taking you elsewhere
 */
function preventDefault(e) {
  if (e.preventDefault) {
    // If preventDefault() works
    e.preventDefault(); // Use preventDefault()
  } else {
    // Otherwise
    e.returnValue = false; // Use old IE version
  }
}

/*
 * removes an <li> element from a <ul> list
 */
function removeElementFromList(elListItem) {
  if (elListItem) {
    let elList = elListItem.parentNode; // Get the ul element
    elList.removeChild(elListItem); // Remove list item from list
  }
}

/*
 * add an event listener with IE fallback
 */
function addCustomEventListener(element, actionName, functionToRun) {
  if (element.addEventListener) {
    // If event listener supported
    element.addEventListener(actionName, functionToRun, false);
  } else {
    // IE fallback
    element.attachEvent("on" + actionName, functionToRun);
  }
}

/*
 * Waits for ms milliseconds.
 * Must be run inside an async method.
 */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
