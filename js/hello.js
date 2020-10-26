console.log("Hello World!");

/* Symbols */
let s = Symbol("sym_x");
let t = Symbol("sym_x");

console.log(s.toString());
console.log(t.toString());

s = Symbol.for("shared");
t = Symbol.for("shared");
console.log(s === t);
console.log(Symbol.keyFor(t));