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
 * Waits for ms milliseconds.
 * Must be run inside an async method.
 */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));