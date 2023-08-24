/**
 * combine two arrays
 */
const letters = ["A", "B", "C"];
const numbers = [1, 2, 3];
const comb = [...letters, ...numbers];

console.log(comb.join(","));
