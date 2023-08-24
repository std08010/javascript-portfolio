let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function (title, colors) {
  colors.push({ title: title });
  return colors;
};

console.log(addColor("Glam Green", list).length);
console.log(list.length);
