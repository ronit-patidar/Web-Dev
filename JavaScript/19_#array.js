// In JavaScript, an array is a special variable that can hold multiple values in a single variable.

// let a = [1, 2, 3];                  // Most common
// let b = new Array(4, 5, 6);         // Using constructor
// let c = [];                         // Empty array


// Create an array of fruits
let fruits = ["apple", "banana", "mango"];

console.log("Original Array:", fruits);

// Access elements
console.log("First Fruit:", fruits[0]);

// Modify an element
fruits[1] = "orange";
console.log("After Modification:", fruits);

// Add elements
fruits.push("grape");          // at end
fruits.unshift("kiwi");        // at beginning

console.log("After Adding:", fruits);

// Remove elements
fruits.pop();                  // remove last
fruits.shift();                // remove first

console.log("After Removing:", fruits);

// Slice (copy part of array)
let someFruits = fruits.slice(0, 2);
console.log("Sliced Fruits:", someFruits);

// Splice (remove/replace items)
fruits.splice(1, 1, "lemon");  // replace 1 item at index 1
console.log("After Splice:", fruits);

// Check value
console.log("Includes 'apple'?", fruits.includes("apple"));
console.log("Index of 'mango':", fruits.indexOf("mango"));

// Join array into string
console.log("Fruits String:", fruits.join(" | "));

// Loop through array
console.log("Loop with forEach:");
fruits.forEach((fruit, index) => {
  console.log(index + ":", fruit);
});

// Mixed array
let mix = [42, "hello", true, [1, 2, 3]];
console.log("Mixed Array:", mix);
console.log("Nested value:", mix[3][1]);

// Array of objects
let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 }
];

console.log("User 1:", users[0].name, users[0].age);
