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
  await delay(1000);
  updateClass("one", "cool");

  //
  //UNDO
  //
  await delay(1000);
  updateClass("one", "hot");

  /*
   * Get element NodeList by class
   */

  //
  //DO
  //
  await delay(1000);
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
  await delay(1000);
  if (el !== null) {
    el.className = "hot";
  }

  /*
   * Get element NodeList by tag
   */

  //
  //DO
  //
  await delay(1000);
  els = document.getElementsByTagName("li"); // Find <li> elements

  // If 1 or more are found
  if (els.length > 0) {
    let el = els[0]; // Select the first one using array syntax
    el.className = "cool"; // Change the value of the class attribute
  }

  //
  //UNDO
  //
  await delay(1000);
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
  await delay(1000);
  // querySelector only returns the first match.
  el = document.querySelector("li.hot");
  el.className = "cool";

  await delay(1000);
  // querySelectorAll returns a NodeList.
  // The third li element is then selected and changed.
  els = document.querySelectorAll("li.hot");
  if (els.length > 1) {
    els[1].className = "cool";
  }

  //
  //UNDO
  //
  await delay(1000);
  el.className = "hot";

  await delay(1000);
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
      await delay(1000);
      hotItems[i].className = "cool"; // Change value of class attribute
    }
  }

  //
  //UNDO
  //
  if (hotItems.length > 0) {
    // Loop through each item
    for (let i = 0; i < hotItems.length; i++) {
      await delay(1000);
      hotItems[i].className = "hot"; // Change value of class attribute
    }
  }
};
waitAndExecute();
