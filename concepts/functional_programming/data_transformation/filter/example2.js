const schools = ["Yorktown", "Washington", "Wakefield"];

const cutSchool = (cutObj, list) => list.filter((school) => school != cutObj);

console.log(cutSchool("Washington", schools).join(", "));
console.log(schools.join(", "));
