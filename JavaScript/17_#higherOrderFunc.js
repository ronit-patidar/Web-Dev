// 

function abcd(){
   console.log("A");
    return function(){
        console.log("B");
            return function(){
                console.log("C");
            }
    }
}
abcd();  // A
abcd()(); // AB
abcd()()(); // ABC

// abcd -> higher order function. 
// callback -> function passed as argument.

