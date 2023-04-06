var topicVar = "JavaScript";
if (topicVar) {
  var topicVar = "React";
  console.log("block with var", topicVar); // React
}
console.log("global with var", topicVar); // React

var topicLet = "JavaScript";
if (topicLet) {
  let topicLet = "React";
  console.log("block with let", topicLet); // React
}
console.log("global with let", topicLet); // JavaScript
