const schools = ["Yorktown", "Washington", "Wakefield"];

/**
 * Convert an array of Strings into an array of Objects
 */
let highSchools = schools.map((school) => ({ name: school }));
console.log(highSchools);
