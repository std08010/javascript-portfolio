/**
 * Recursion with asynchronous callback
 */

const countdown = (value, fn, delay = 1000) => {
  fn(value);
  //setTimeout is an asynchronous function that runs a function after a 'delay' number of milliseconds
  return value > 0 ? setTimeout(() => countdown(value - 1, fn, delay), delay) : value;
};
const log = (value) => console.log(value);
countdown(10, log);
