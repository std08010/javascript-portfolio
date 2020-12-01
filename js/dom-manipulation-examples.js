let timeToWait = 500;

/*
 * Write all the actions inside an async method so that we can call
 * the delay() function. This helps see the changes as they happen because we stop execution.
 * For every action that we perfom we then undo it so that the html has the same
 * stucture for the next group of actions.
 */
const waitAndExecute = async () => {
  /*
   * Get element by ID and change class.
   */

  //
  //DO
  //
  await delay(timeToWait);
  updateClass("one", "cool");

  //
  //UNDO
  //
  await delay(timeToWait);
  updateClass("one", "hot");

  /*
   * Get element NodeList by class
   */

  //
  //DO
  //
  await delay(timeToWait);
  let els = document.getElementsByClassName("hot"); // Find hot items
  let el;

  // If 3 or more are found
  if (els.length > 2) {
    el = els.item(2); // Select the third one from the NodeList
    el.className = "cool"; // Change the value of its class attribute
  }
  //IMPORTANT
  //"els" is a live Nodelist so it has been updated and now contains only
  //two nodes ("one" and "two") because "three" no longer has class "hot"
  //and that is why we store its reference in a variable "el" outside the if-clause
  //so that we can reset its class to "hot".

  //
  //UNDO
  //
  await delay(timeToWait);
  if (el !== null) {
    el.className = "hot";
  }

  /*
   * Get element NodeList by tag
   */

  //
  //DO
  //
  await delay(timeToWait);
  els = document.getElementsByTagName("li"); // Find <li> elements

  // If 1 or more are found
  if (els.length > 0) {
    let el = els[0]; // Select the first one using array syntax
    el.className = "cool"; // Change the value of the class attribute
  }

  //
  //UNDO
  //
  await delay(timeToWait);
  if (els.length > 0) {
    let el = els[0];
    el.className = "hot";
  }

  /*
   * Get element and NodeList by css selector
   */

  //
  //DO
  //
  await delay(timeToWait);
  // querySelector only returns the first match.
  el = document.querySelector("li.hot");
  el.className = "cool";

  await delay(timeToWait);
  // querySelectorAll returns a NodeList.
  // The third li element is then selected and changed.
  els = document.querySelectorAll("li.hot");
  if (els.length > 1) {
    els[1].className = "cool";
  }

  //
  //UNDO
  //
  await delay(timeToWait);
  el.className = "hot";

  await delay(timeToWait);
  //IMPORTANT
  //"els" here is static NodeList (NOT live) so after we change the class
  //of "one" back to "hot" the list still contains the two elements as before
  //("two" and "three") so we can access "three" like we did before.
  if (els.length > 1) {
    els[1].className = "hot";
  }

  /*
   * Iterate a NodeList
   */

  //
  //DO
  //
  let hotItems = document.querySelectorAll("li.hot"); // Store NodeList in array
  // If it contains items
  if (hotItems.length > 0) {
    // Loop through each item
    for (let i = 0; i < hotItems.length; i++) {
      await delay(timeToWait);
      hotItems[i].className = "cool"; // Change value of class attribute
    }
  }

  //
  //UNDO
  //
  if (hotItems.length > 0) {
    // Loop through each item
    for (let i = 0; i < hotItems.length; i++) {
      await delay(timeToWait);
      hotItems[i].className = "hot"; // Change value of class attribute
    }
  }

  /*
   * DOM Traversing
   */

  /*
   * Siblings
   */

  //
  //DO
  //

  // Select the starting point and find its siblings
  let startItem = document.getElementById("two");
  let prevItem = startItem.previousSibling;
  let nextItem = startItem.nextSibling;

  //Change the values of the siblings' class attributes
  await delay(timeToWait);
  prevItem.className = "complete";
  await delay(timeToWait);
  nextItem.className = "cool";

  //
  //UNDO
  //
  await delay(timeToWait);
  prevItem.className = "hot";
  await delay(timeToWait);
  nextItem.className = "hot";

  /*
   * Childs
   */

  //
  //DO
  //

  //Select the starting point and find its children
  let parentItem = document.getElementsByTagName("ul")[0];
  let firstChild = parentItem.firstChild;
  let lastChild = parentItem.lastChild;

  await delay(timeToWait);
  //this is equivalent to :> firstChild.className = "complete";
  firstChild.setAttribute("class", "complete");
  await delay(timeToWait);
  lastChild.setAttribute("class", "cool");

  //
  //UNDO
  //
  await delay(timeToWait);
  firstChild.className = "hot";
  await delay(timeToWait);
  //element "four" did not have a class at first so we put an empty class
  lastChild.setAttribute("class", "");

  /*
   * Access/Update text nodes with nodeValue
   */

  await delay(timeToWait);
  document.getElementById("one").firstChild.nextSibling.nodeValue = " fucks";
  await delay(timeToWait);
  document.getElementById("one").firstChild.nextSibling.nodeValue = " figs";

  await delay(timeToWait);
  let itemTwo = document.getElementById("two"); //Get second list item
  let elText = itemTwo.firstChild.nodeValue; //Get its text content
  elText = elText.replace("pine nuts", "kale"); //Change pine nuts to kale
  itemTwo.firstChild.nodeValue = elText; //Update the list item
  await delay(timeToWait);
  itemTwo.firstChild.nodeValue = "pine nuts";

  /*
   * Access/Update containing element
   *
   * innerHTML: everything inside the element both text and html elements. If you want to add
   * markup and text to the element use this field.
   * textContext: all the text both in the containing element and its child html elements
   * (it strips away any markup). If you want to add only text to the containing element use this.
   * innerText: only the text in the containing element that is displayed
   * (it skips any text that is hidden with css). Avoid this because it is obsolete and slow.
   */

  let firstItem = document.getElementById("one"); // Find first list item
  let showInnerHTML = firstItem.innerHTML; // Get value of innerHTML
  let showTextContent = firstItem.textContent; // Get value of textContent
  //Make sure to uncomment the custom css rules in the html file.
  let showInnerText = firstItem.innerText; // Get value of innerText

  await delay(timeToWait);
  // Show the content of these two properties at the end of the list
  let msg = "<p>textContent: " + showTextContent + "</p>";
  msg += "<p>innerText: " + showInnerText + "</p>";
  msg += "<p>innerHTML: " + showInnerHTML + "</p>";
  el = document.getElementById("scriptResults");
  el.innerHTML = msg;

  await delay(timeToWait);
  firstItem.textContent = "sourdough bread"; // Update the first list item

  //Update the content of the first list item so it is a link
  await delay(timeToWait);
  firstItem.innerHTML =
    '<a href="http://example.org">' + showInnerHTML + "</a>";
};
waitAndExecute();
