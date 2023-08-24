let schoolsObj = [{ name: "Yorktown" }, { name: "Stratford" }, { name: "Washington" }, { name: "Wakefield" }];

/**
 * Edit an object's value inside an array of objects
 */
let editName = (oldName, newName, schoolsList) =>
  schoolsList.map((school) => {
    if (school.name === oldName) {
      //   return { ...school, newName }; //This will return the following object: { name: oldName, newName: newName }
      return { name: newName };
    } else {
      return school;
    }
  });
let updatedSchools = editName("Stratford", "Woodlawn", schoolsObj);
console.log(updatedSchools);
console.log(schoolsObj);
