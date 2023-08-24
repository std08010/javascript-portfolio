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

/**
 * They can be sent to other functions as arguments
 */
const insideFn = (loggerFn) => {
  loggerFn("They can be sent to other functions as arguments");
};
insideFn((message) => console.log(message));

/**
 * They can also be returned from other functions, just like variables
 */
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};
//other way of writing above function
const createScreamArrow = (logger) => (message) => {
  logger(message.toUpperCase() + "!!!");
};

const scream = createScream((message) => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");
