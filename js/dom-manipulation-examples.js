/*
 * Get element by ID and change class.
 * But do it after 5 seconds so that the rest of the code can run correctly.
 */
const waitAndFindByID = async () => {
  await delay(5000);
  console.log("Waited 5s");

  updateClass("one", "cool");
};
waitAndFindByID();

/*
 * Get element NodeList by class
 */
const waitAndFindByClass = async () => {
  await delay(1000);
  console.log("Waited 1s");

  let elements = document.getElementsByClassName("hot"); // Find hot items

  // If 3 or more are found
  if (elements.length > 2) {
    let el = elements.item(2); // Select the third one from the NodeList
    el.className = "cool"; // Change the value of its class attribute
  }
};
waitAndFindByClass();

/*
 * Get element NodeList by tag
 */

const waitAndFindByTag = async () => {
  await delay(2000);
  console.log("Waited 2s");

  let elements = document.getElementsByTagName("li"); // Find <li> elements

  // If 2 or more are found
  if (elements.length > 1) {
    let el = elements[1]; // Select the second one using array syntax
    el.className = "cool"; // Change the value of the class attribute
  }
};
waitAndFindByTag();
