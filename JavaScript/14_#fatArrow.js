// 1. Simple Arrow Function (returns the result directly)
const add = (a, b) => a + b;  // implicit return
console.log("1. Add result:", add(5, 3)); // Output: 8

// 2. Arrow Function with No Parameters
const greet = () => console.log("2. Hello, World!");
greet(); // Output: Hello, World!

// 3. Arrow Function with One Parameter (no parentheses needed)
const square = x => x * x;
console.log("3. Square of 4:", square(4)); // Output: 16

// 4. Arrow Function with Multiple Parameters (requires parentheses)
const multiply = (a, b) => a * b;
console.log("4. Multiply 6 and 7:", multiply(6, 7)); // Output: 42

// 5. Arrow Function with Block Body (multiple statements)
const addAndLog = (a, b) => {
  const result = a + b;
  console.log("5. Sum:", result);
  return result;
};
console.log("Add and Log result:", addAndLog(2, 3)); // Output: Sum: 5, Add and Log result: 5

