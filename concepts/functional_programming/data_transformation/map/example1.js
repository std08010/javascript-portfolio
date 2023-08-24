const schools = ["Yorktown", "Washington", "Wakefield"];

/**
 * map returns a copy of the array and leaves the original array intact
 */
let highSchools = schools.map((school) => `${school} High School`);
console.log(highSchools.join(", "));
console.log(schools.join(", "));
