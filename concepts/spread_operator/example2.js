/**
 * get last object from array
 */

const letters = ["A", "B", "C"];

//reverse mutates the original array and returns it
const [lastMutable] = letters.reverse();
console.log(lastMutable);
console.log(letters.join(","));

letters.reverse(); //reverse again the array so that it becomes as in the beggining
//we create a copy of the original array and then we reverse that copy
const [lastImmutable] = [...letters].reverse();
console.log(lastMutable);
console.log(letters.join(","));
