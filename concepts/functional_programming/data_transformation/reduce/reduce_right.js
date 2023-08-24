/**
 * It is the same as reduce but starts from the end of the array.
 */

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduceRight((max, age) => (age > max ? age : max), 0);
console.log("maxAge", maxAge);
