const log = (message) => {
  console.log(message);
};
log("In JavaScript, functions are variables");

/**
 * They can be added to objects like variables
 */
const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log("Object messsage: " + message);
  },
};
obj.log(obj.message);

/**
 * They can be inserted into arrays like variables
 */
const messages = [
  "They can be inserted into arrays",
  (message) => console.log(message),
  "like variables",
  (message) => console.log(message),
];
messages[1](messages[0]);
messages[3](messages[2]);
