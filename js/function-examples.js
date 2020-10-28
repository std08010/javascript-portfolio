/*
 * Functions
 */

// Create a function to update the content of the element whose id attribute has a value of elementID
function updateContent(elementID, msg) {
  var el = window.document.getElementById(elementID);
  el.textContent = msg;
}
// Create a function to update the inner HTML of the element whose id attribute has a value of elementID
function updateInnerHTML(elementID, msg) {
  var el = document.getElementById(elementID);
  el.innerHTML = msg;
}
// Create a function to update the class of the element whose id attribute has a value of elementID
function updateClass(elementID, classValue) {
  var el = this.document.getElementById(elementID);
  el.className = classValue;
}

// Create a variable called msg to hold a new message
var msg = "Sign up to receive our newsletter for 10% off!";

// Call the function
updateContent("message", msg);

/*
 * Objects
 */

// let hotel = {
//   name: "Quay",
//   rooms: 40,
//   booked: 25,
//   checkAvailability: function () {
//     return this.rooms - this.booked; // Need "this" because inside function
//   },
// };

let hotel = new Object();
hotel.name = "Quay";
hotel["rooms"] = 40;
hotel.booked = 25;
hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

delete hotel.booked; //now the checkAvailability function will return the value NaN because booked is undefined
hotel.booked = 26; //comment this to see the NaN value

updateContent("hotelName", hotel.name);
updateContent("rooms", hotel.checkAvailability());

/*
 * Add new properties to object
 */
hotel.gym = true;
hotel.pool = false;
updateClass("pool", hotel.pool);
updateClass("gym", hotel.gym);

/*
 * Create multiple objects using a constructor function OR a class declaration
 */

// function Hotel(name, rooms, booked) {
//   this.name = name;
//   this.rooms = rooms;
//   this.booked = booked;
//   this.checkAvailability = function () {
//     return this.rooms - this.booked;
//   };
// }

class Hotel {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
      return this.rooms - this.booked;
    };
  }
}

let beachHotel = new Hotel("Beach", 60, 25);
let parkHotel = new Hotel("Park", 120, 77);

updateContent(
  "hotel1",
  beachHotel.name + " rooms: " + beachHotel.checkAvailability()
);
updateContent(
  "hotel2",
  parkHotel.name + " rooms: " + parkHotel.checkAvailability()
);

/*
 * Browser Object Model - Window Object
 */
// Create a variable called msg to hold a message that will be shown on the page
let msgInfo = "<h2>browser window</h2>";
// Find the width of the browser window, and put this in the msg variable
msgInfo += "<p>width: " + window.innerWidth + "</p>";
// Find the height of the window and add it to the msg variable
msgInfo += "<p>height: " + this.innerHeight + "</p>";
// Find the number of items in the browser window's history and add it to the msg variable
msgInfo += "<h2>history</h2><p>items: " + window.history.length + "</p>";
// Find the width of the computer screen and add it to the msg variable
msgInfo += "<h2>screen</h2><p>width: " + window.screen.width + "</p>";
// Find the height of the computer screen and add it to the msg variable
msgInfo += "<p>height: " + screen.height + "</p>";

updateInnerHTML("windowInfo", msgInfo);

// Find the location of the current page and display it in an alert box
alert("Current page: " + window.location);

/*
 * Document Object Model
 */
// Find the title of the document, and put this in the msg variable
let msgFooter = "<p><b>page title: </b>" + document.title + "<br />";
// Find the URL of the document and add it to the msg variable
msgFooter += "<b>page address: </b>" + document.URL + "<br />";
// Find the date the document was last modified and add it to the msg variable
msgFooter += "<b>last modified: </b>" + document.lastModified + "</p>";

updateInnerHTML("footer", msgFooter);

/*
 * String Object
 */
// Create a variable called saying to hold the string that will be used
let saying = "Home sweet home ";

// Find the length of the string, and put this in the msg variable
let msgString = "<h2>length</h2><p>" + saying.length + "</p>";
// Convert the string to uppercase and add it to the msg variable
msgString += "<h2>uppercase</h2><p>" + saying.toUpperCase() + "</p>";
// Convert the string to lowercase and add it to the msg variable
msgString += "<h2>lowercase</h2><p>" + saying.toLowerCase() + "</p>";
// Find the character with an index of 12 in the string and add it to the msg variable
msgString += "<h2>character index: 12</h2><p>" + saying.charAt(12) + "</p>";
// Find the index number of the first instance of 'ee' in the string and add it to the msg variable
msgString += "<h2>first ee</h2><p>" + saying.indexOf("ee") + "</p>";
// Find the index number of the last instance of the 'e' character in the string and add it to the msg variable
msgString += "<h2>last e</h2><p>" + saying.lastIndexOf("e") + "</p>";
// Find the characters with an index number in the 8-14 range in the string and add it to the msg variable
msgString +=
  "<h2>character index: 8-14</h2><p>" + saying.substring(8, 14) + "</p>";
// Find the first instance of 'me' in the string and replace it with a 'w' character and add it to the msg variable
msgString += "<h2>replace</h2><p>" + saying.replace("me", "w") + "</p>";

updateInnerHTML("stringInfo", msgString);

/*
 * Number Object
 */
// Create a variable to hold the number that will be used
let originalNumber = 10.23456;
// Create a variable to hold a message that will be shown on the page
let msgNumber = "<h2>original number</h2><p>" + originalNumber + "</p>";
// Round the number to 3 decimal places and add it to the msg variable
msgNumber +=
  "<h2>3 decimal places</h2><p>" + originalNumber.toFixed(3) + "</p>";
// Round the number to a precisely 3 digits and add it to the msg variable
msgNumber += "<h2>3 digits</h2><p>" + originalNumber.toPrecision(3) + "</p>";
// Format the number to exponential notation and add it to the msg variable
msgNumber +=
  "<h2>exponential</h2><p>" + originalNumber.toExponential(2) + "</p>";

updateInnerHTML("numberInfo", msgNumber);

/*
 * Math Object
 */
// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor(Math.random() * 10 + 1); //we add 1 because value is between 0 and 9

updateInnerHTML("mathInfo", "<h2>random number</h2><p>" + randomNum + "</p>");

/*
 * Date Object
 */
// Create a variable to hold a new Date object (defaults to now)
let today = new Date();
// Create a variable to hold the year this year
let year = today.getFullYear();

updateInnerHTML("dateInfo", "<p>Copyright &copy;" + year + "</p>");

// Set the date that the company was established
let est = new Date("Apr 16, 1996 15:45:55");
// Get difference between then & now in milliseconds
let difference = today.getTime() - est.getTime();
// Calculate how many milliseconds is one year
let oneYearInMillis = 365 * 24 * 60 * 60 * 1000; //31,536,000,000
// Divide by number of milliseconds to get years
difference = difference / oneYearInMillis;

updateContent(
  "message",
  Math.floor(difference) + " years of online travel advice"
);

/*
 * Generic example
 */

/* The script is placed inside an immediately invoked function expression (IIFE)
   which helps protect the scope of variables */

(function () {
  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a hotel object using object literal syntax
  let hotel = {
    name: "Park",
    roomRate: 240, // Amount in dollars
    discount: 15, // Percentage discount
    offerPrice: function () {
      let offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    },
  };

  // Write out the hotel name, standard rate, and the special rate
  updateContent("hotelNameOffer", hotel.name);
  updateContent("roomRate", "$" + hotel.roomRate.toFixed(2));
  updateContent("specialRate", "$" + hotel.offerPrice());

  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER

  function offerExpires(today) {

    // Add 7 days time (added in milliseconds)
    let weekFromToday = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Create arrays to hold the names of days / months
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Collect the parts of the date to show on the page
    let date = weekFromToday.getDate();
    let day = dayNames[weekFromToday.getDay()];
    let month = monthNames[weekFromToday.getMonth()];
    let year = weekFromToday.getFullYear();

    // Create the message
    let expiryMsg = "Offer expires next ";
    expiryMsg += day + " <br />(" + date + " " + month + " " + year + ")";
    return expiryMsg;
  }

  // Add the expiry message
  updateInnerHTML("offerEnds", offerExpires(new Date()));

  // Finish the immediately invoked function expression
})();
