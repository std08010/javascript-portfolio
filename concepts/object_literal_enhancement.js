const name = "Haris";
const age = 33;

const print = function () {
  console.log(this); //"this" refers to the object that the function will be called upon
  console.log(`My name is ${this.name} and i am ${this.age} years old`);
};

print(); //in this case the "this" refers to the global scope of the program.

/**
 * add externally declared variables inside an object
 */
const person = { name, age };
console.log(person);

/**
 * add an externaly declared function inside an object
 */
const person2 = { name, age, print };
person2.print(); //in this case the "this" refers to the object person2

const person3 = {
  name,
  age,
  //print: function (){}
  print() {
    console.log(this); //"this" refers to the object that this function is declared inside
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
};
person3.print();
