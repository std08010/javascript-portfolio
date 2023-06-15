let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

//Mutable
function rateColorMutable(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColorMutable(color_lawn, 5).rating);
console.log(color_lawn.rating);

//Immutable
const rateColorImmutable = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};
console.log(rateColorImmutable(color_lawn, 10).rating);
console.log(color_lawn.rating);

const rateColorImmutable2 = (color, rating) => ({
  ...color,
  rating,
});
console.log(rateColorImmutable2(color_lawn, 10).rating);
console.log(color_lawn.rating);

//Arrays
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

//Mutable
const addColorMutable = function (title, colors) {
  colors.push({ title: title });
  return colors;
};
console.log(addColorMutable("Glam Green", list).length);
console.log(list.length);

//Immutable
const addColorImmutable = (title, array) => array.concat({ title: title });
console.log(addColorImmutable("Glam Blue", list).length);
console.log(list.length);

const addColorImmutable2 = (title, array) => [...array, { title: title }]; //This function copies the original list to a new array and then adds a new object containing the color’s title to that copy
console.log(addColorImmutable2("Glam Blue", list).length);
console.log(list.length);
