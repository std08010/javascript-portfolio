const schoolsObj = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5,
};

/**
 * Object.keys returns an array of an object's key fields.
 * So we can use Array.map on it since it is an array
 */

const schoolArray = Object.keys(schoolsObj).map((key) => ({ name: key, wins: schoolsObj[key] }));
console.log(schoolArray);
