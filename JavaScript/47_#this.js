//  this special keyword (behaves diffent at different places ) 
console.log(this); // this keyword is window in global.

function abcd(){
    console.log(this); // this keyword is window in function.
};
abcd();
// ek function jo object ke andar ho usse method kehte hn
var obj={
    name : "name",
    talk : function(){
        console.log("Yes, I talk");
        console.log(this); // in method this keyword is object .
    }
}
obj.talk();
