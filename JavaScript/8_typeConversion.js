//  1) Implicit type conversion.
let a="5" + 2;
console.log(a,typeof a); // x is converted into string

let b="5"-2;
console.log(b,typeof b); // y is converted into Number

let c=true+1;
console.log(c,typeof c); // z is converted into Number

// 2) Explicit 
// To Number

let d="1123";
d=parseInt(d); // or parseFloat
console.log(d,typeof d);

let e=Number("11233");
console.log(e,typeof e);

// To String

let f=12345;
f=f.toString();
console.log(f,typeof f);