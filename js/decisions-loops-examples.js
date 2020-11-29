/*
 * Comparison Operators
 */
let pass = 50; // Pass mark
let score = 90; // Score

// Check if the user has passed
let hasPassed = score >= pass;

updateInnerHTML("answer", "Level passed: " + hasPassed);

let score1 = 90; // Round 1 score
let score2 = 95; // Round 2 score
let highScore1 = 75; // Round 1 high score
let highScore2 = 95; // Round 2 high score

// Check if scores are higher than current high scores
let comparison = score1 + score2 > highScore1 + highScore2;

updateInnerHTML("answer2", "New high score: " + comparison);

/*
 * Logical Operators
 */
let rScore1 = 8; // Round 1 score
let rScore2 = 8; // Round 2 score
let pass1 = 6; // Round 1 pass mark
let pass2 = 6; // Round 2 pass mark

// Check whether user passed both rounds, store result in variable
var passBoth = rScore1 >= pass1 && rScore2 >= pass2;

updateInnerHTML("answer3", "Both rounds passed: " + passBoth);

// Check whether user passed one of the two rounds, store result in variable
var minPass = rScore1 >= pass1 || rScore2 >= pass2;

updateInnerHTML("answer4", "Resit required: " + !minPass);

/*
 * If statement
 */
let ifScore = 75; // Score
let ifMsg = ""; // Message

function congratulate() {
  ifMsg += "Congratulations!";
  ifMsg += " Proceed to the next round.";
}

if (ifScore >= 50) {
  // If score is 50 or higher
  congratulate();
}

updateContent("answer7", ifMsg);

/*
 * If-else statement
 */
var passElse = 50; // Pass mark
var scoreElse = 49; // Current score
var msgElse; // Message

// Select message to write based on score
if (scoreElse >= passElse) {
  msgElse = "Congratulations, you passed!";
} else {
  msgElse = "Have another go!";
}

updateContent("answer10", msgElse);

/*
 * Switch statement
 */
let msgSwitch; // Message
let levelSwitch = 2; // Level

// Determine message based on level
switch (levelSwitch) {
  case 1:
    msgSwitch = "Good luck on the first test";
    break;
  case 2:
    msgSwitch = "Second of three - keep going!";
    break;
  case 3:
    msgSwitch = "Final round, almost there!";
    break;
  default:
    msgSwitch = "Good luck!";
    break;
}

updateContent("answer6", msgSwitch);

/*
 * For Loop
 */
let scores = [24, 32, 17]; // Array of scores
let arrayLength = scores.length; // Items in array
let roundNumber = 0; // Current round
let msgFor = ""; // Message

// Loop through the items in the array
for (let i = 0; i < arrayLength; i++) {
  // Arrays are zero based (so 0 is round 1)
  // Add 1 to the current round
  roundNumber = i + 1;

  // Write the current round to message
  msgFor += "Round " + roundNumber + ": ";

  // Get the score from the scores array
  msgFor += scores[i] + "<br />";
}

updateInnerHTML("answer8", msgFor);

/*
 * While Loop
 */
let i = 1; // Set counter to 1
let msgWhile = ""; // Message

// Store 5 times table in a variable
while (i < 10) {
  msgWhile += i + " x 5 = " + i * 5 + "<br />";
  i++;
}

updateInnerHTML("answer5", msgWhile);

/*
 * Do-While Loop
 */
let iDo = 1; // Set counter to 1
let msgDo = ""; // Message

// Store 5 times table in a variable
do {
  msgDo += iDo + " x 5 = " + iDo * 5 + "<br />";
  iDo++;
} while (iDo < 1);
// Note how this is already 1 and it still runs

updateInnerHTML("answer9", msgDo);

/*
 * Generic Example
 */
(function () {
  var table = 3; // Unit of table
  var operator = "multiplication"; // Type of calculation
  var i = 1; // Set counter to 1
  var msg = ""; // Message

  if (operator === "addition") {
    // Do addition
    while (i < 11) {
      msg += i + " + " + table + " = " + (i + table) + "<br />";
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + " x " + table + " = " + i * table + "<br />";
      i++;
    }
  }

  // Write the message into the page
  updateInnerHTML("blackboard", msg);
}());
