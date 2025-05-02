// String Slicing in JavaScript

const str = "Hello, JavaScript!";


// str.slice(starting index , ending index );

// Slice from index 0 to 5 (not inclusive of 5)
const slice1 = str.slice(0, 5);
console.log(slice1); // Output: Hello

// Slice from index 7 to the end
const slice2 = str.slice(7);
console.log(slice2); // Output: JavaScript!

// Slice using negative indices (from the end of the string)
const slice3 = str.slice(-11,-1);
console.log(slice3); // Output: JavaScript

// Slice the entire string
const slice4 = str.slice();
console.log(slice4); // Output: Hello, JavaScript!