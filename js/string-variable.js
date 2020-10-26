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
let note2 = "<a href=\"construction-page.html\">25% off!</a>";

let elTitle = document.getElementById("title2");
elTitle.innerHTML = title;

var elNote2 = document.getElementById("note2");
elNote2.innerHTML = note2;
