// 1. Function Declaration
function sayHello() {
    console.log("1. Hello from Function Declaration");
  }
  sayHello();
  
  // 2. Function Expression
  const sayHi = function () {
    console.log("2. Hi from Function Expression");
  };
  sayHi();
  
  // 3. Arrow Function
  const add = (a, b) => a + b;
  console.log("3. Arrow Function Result:", add(2, 3));
  
  // 4. Anonymous Function (used as a callback)
  setTimeout(function () {
    console.log("4. Hello from Anonymous Function (inside setTimeout)");
  }, 100);
  
  // 5. IIFE - Immediately Invoked Function Expression
  (function () {
    console.log("5. Hello from IIFE");
  })();
  
  // 6. Constructor Function
  function Person(name) {
    this.name = name;
    this.sayName = function () {
      console.log("6. My name is " + this.name);
    };
  }
  const person1 = new Person("Alice");
  person1.sayName();

  // 7. setInterval   
  setInterval(function() {
    console.log("This message appears every 2 seconds");
  }, 2000); // 2000 ms = 2 seconds

