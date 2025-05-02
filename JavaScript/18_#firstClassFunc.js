//  first class function 

//  assign functionn to variables 
//  pass fnc as argument to other func
//  retun func from other func

// A closure is when a function remembers variables 
// from its outer (parent) scope, even after the outer function has finished running.

function outer() {
    let name = "JavaScript";  // outer function variable
  
    function inner() {
      console.log("Hello " + name); // inner function uses it
    }
  
    return inner;
  }
  
  const greet = outer(); // outer() runs, but returns inner()
  greet(); // Output: Hello JavaScript
  