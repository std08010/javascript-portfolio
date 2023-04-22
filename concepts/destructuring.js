const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

// const { bread, meat } = sandwich;
let { bread, meat } = sandwich;

console.log(bread, meat);

bread = "garlic";
meat = "turkey";
console.log(bread, meat);

console.log(sandwich.bread, sandwich.meat);
