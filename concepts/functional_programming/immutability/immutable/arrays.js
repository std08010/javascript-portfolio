let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

/**
 * concat returns a copy of the array
 */
const addColor = (title, array) => {
  return array.concat({ title: title });
};

/**
 * This function copies the original array to a new array
 * and then adds a new object containing the color’s title to that copy
 */
const addColor2 = (title, array) => [...array, { title: title }];

console.log(addColor("Glam Blue", list).length);
console.log(addColor2("Glam Blue", list).length);
console.log(list.length);
