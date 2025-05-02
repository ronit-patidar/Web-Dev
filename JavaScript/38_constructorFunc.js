// In js a constructor is used to create multiple objects with the same stucture and behaviour.
// New Keyword
// creates an instance object from a constructor function or class.
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sing=false;
    this.sayhello=function(){
        console.log("Hi,my name is "+this.name);
    }
}
let Person1 = new Person("Alice",25);
Person1.sayhello();
console.log(Person1);