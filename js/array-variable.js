// Create an array and assign it values.
let colors = ["white", "black", "custom"];
// let colors = new Array("white", "black", "custom");

// Show the first item from the array.
let elColor = document.getElementById("colors");
elColor.textContent = colors[0];


colors[2] = "beige";
elColor.textContent = colors[2];

