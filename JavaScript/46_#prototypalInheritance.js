// prototypal inheritance 
var human = {
    name : "ronit",
    canfly : false,
    cantalk : true ,
    willDie : true ,
}
var sheriStudent = { //adding extra properties
    canSolveJsQ : true,
    canBuildModernWeb : true,
}
sheriStudent.__proto__ = human;  // inheritance 
console.log(sheriStudent.willDie);
