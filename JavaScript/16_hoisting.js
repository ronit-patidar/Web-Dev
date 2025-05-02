// Example of Hoisting in JavaScript

// Function hoisting
sayHello();

function sayHello() {
    console.log("Hello, world!");
}

// Variable hoisting
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// Let and const are not hoisted in the same way
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

// Hoisting does not apply to function expressions
// sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
    console.log("Goodbye, world!");
};
sayGoodbye();