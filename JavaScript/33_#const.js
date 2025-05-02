const person={
    name:"alice",
    age:25,
    city:"newyork"
};
person.age=26;  // updating const
person.gender="female"; // adding new prop 
console.log(person);
person=[1,23]; // not allowed