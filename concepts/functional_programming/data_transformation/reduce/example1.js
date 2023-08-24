/**
 * Transform array into a single value
 */

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  return age > max ? age : max;
}, 0);
console.log("maxAge", maxAge);
