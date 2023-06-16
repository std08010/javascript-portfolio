const schools = ["Yorktown", "Washington", "Wakefield"];

//Join
console.log(schools.join(", "));

//Filter
console.log(schools.filter((school) => school.length > 0 && school[0] === "W"));

const cutSchool = (cutObj, list) => list.filter((school) => school != cutObj);
console.log(cutSchool("Washington", schools).join(", "));
console.log(schools.join(", "));

//Map
let highSchools = schools.map((school) => `${school} High School`);
console.log(highSchools.join(", "));
console.log(schools.join(", "));

highSchools = schools.map((school) => ({ name: school }));
console.log(highSchools);
