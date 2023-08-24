let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0,
};

const rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};

const rateColor2 = (color, rating) => ({
  ...color,
  rating,
});

console.log(rateColor(color_lawn, 10).rating);
console.log(rateColor2(color_lawn, 5).rating);
console.log(color_lawn.rating);
