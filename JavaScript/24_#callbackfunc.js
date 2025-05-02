// Notes on Callback Functions:

// 1. A callback function is a function passed as an argument to another function.
// 2. It is executed after the completion of the function it is passed to.
// 3. Callbacks are commonly used in asynchronous programming, such as API calls, timers, or event handling.
// 4. The function that takes a callback as an argument is called a higher-order function.
// 5. Example:
   function greet(name, callback) {
       console.log(`Hello, ${name}!`);
       callback(); // Call the callback function
   }
   function sayGoodbye() {
       console.log("Goodbye!");
   }
   greet("Alice", sayGoodbye); // Output: Hello, Alice! Goodbye!