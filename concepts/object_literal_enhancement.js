const name = "Haris";
const age = 33;

const person = { name, age };

console.log(person);

const print = function () {
  console.log(this);
  console.log(`My name is ${this.name} and i am ${this.age} years old`);
};

const person2 = { name, age, print };
person2.print();

const person3 = {
  name,
  age,
  //print: function (){}
  print() {
    console.log(this);
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
};
person3.print();
