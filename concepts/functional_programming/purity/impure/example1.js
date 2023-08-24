const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

/**
 * no arguments, changes a variable outside its scope with direct change.
 */
function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate();
console.log(frederick);
