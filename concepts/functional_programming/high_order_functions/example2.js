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
