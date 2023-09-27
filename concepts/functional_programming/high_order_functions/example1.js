/**
 * They can be sent to other functions as arguments
 */
const insideFn = (loggerFn) => {
  loggerFn("They can be sent to other functions as arguments");
};
insideFn((message) => console.log(message));
