//combine two arrays
const letters = ["A", "B", "C"];
const numbers = [1, 2, 3];
const comb = [...letters, ...numbers];

console.log(comb.join(","));

//get last object from array

// mutates the original array
//const [last] = letters.reverse();

//doesn't mutate the original array
const [last] = [...letters].reverse();

console.log(last);
console.log(letters.join(","));

//split the array in  first element and other elements
const [first, ...others] = letters;
console.log(first);
console.log(others.join(","));

//spread operator with functions arguments
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

//spread operator with objects
const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner,
};
console.log(backpackingMeals);
