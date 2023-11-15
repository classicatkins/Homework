// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Melissa";
const age = 22;
const whatIf = true;
const oldVar;
let newVar = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name, age, whatIf, oldVar, newVar);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
const hello = `hello my name is ${name} and I am ${age} years old.`;
// reassign the value of the variable that references "null"
newVar = "something new";
// print the value and its type
console.log(newVar, typeof newVar);
// print a variable that causes a ReferenceError
console.log(newNewVar);
// alter the previous line to no longer cause a ReferenceError
let newNewVar;
console.log(newNewVar);
