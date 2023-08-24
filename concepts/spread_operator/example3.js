/**
 * split the array in first element and other elements
 */

const letters = ["A", "B", "C"];

const [first, ...others] = letters;
console.log(first);
console.log(others.join(","));
