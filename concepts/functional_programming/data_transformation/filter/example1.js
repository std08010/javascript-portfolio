const schools = ["Yorktown", "Washington", "Wakefield"];

/**
 * filter returns a copy of the array and leaves the original array intact
 */
console.log(schools.filter((school) => school.length > 0 && school[0] === "W"));
console.log(schools.join(", "));
