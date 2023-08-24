/**
 * spread operator with objects
 */

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
