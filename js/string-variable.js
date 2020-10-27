// Create variables to hold the name and note text and assign initial values.
let username = "Altin";
let message = "See our upcoming range";

// Get the element with an id of name.
let elName = document.getElementById("name");
// Replace the content of this element.
elName.textContent = username;

// Get the element with an id of note.
let elNote = document.getElementById("note");
// Replace the content of this element.
elNote.textContent = message;

let title = "Altin's Special Offers";
//let note2 = '<a href="construction-page.html">25% off!</a>';
let note2 = '<a href="construction-page.html">25% off!</a>';

let elTitle2 = document.getElementById("title2");
elTitle2.innerHTML = title;

var elNote2 = document.getElementById("note2");
elNote2.innerHTML = note2;

/* String Operator */

// Store the greeting in a variable
var greeting = "Hello ";

/* Create the welcome message by concatenating the strings in the two variables */
var welcomeMessage = greeting + username + "!";

// Get the element that has an id of greeting
var elTitle = document.getElementById("title");
// Replace the content of this element with the personal message
elTitle.textContent = welcomeMessage;
