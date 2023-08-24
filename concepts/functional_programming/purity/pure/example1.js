const haris = {
  name: "Haris Tsipis",
  canRead: false,
  canWrite: false,
};

/**
 * has argument, returns value,
 * doesn't change anything outside its scope because it is immutable.
 */
const selfEducate = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});
console.log(selfEducate(haris));
console.log(haris);
