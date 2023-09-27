/**
 * Transform array to a different array
 *
 */

const colors = ["red", "red", "green", "blue", "green"];

/**
 * reducing an array with multiple instances of the same value to an array of unique values
 */
const uniqueColors = colors.reduce((unique, color) => (unique.indexOf(color) !== -1 ? unique : [...unique, color]), []);

console.log(uniqueColors);
