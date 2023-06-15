//NOT pure - no arguments, changes a variable outside its scope with direct change.
const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate();
console.log(frederick);

//still not pure - changes a variable outside its scope by being mutable.
const douglas = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducate2 = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};
console.log(selfEducate2(douglas));
console.log(douglas);

//Pure - has argument, returns value, doesn't change anything outside its scope because it is immutable.
const haris = {
  name: "Haris Tsipis",
  canRead: false,
  canWrite: false,
};
const selfEducatePure = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});
console.log(selfEducatePure(haris));
console.log(haris);
