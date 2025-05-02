// Create an object
const person = {
    name: "Ali",
    age: 25,
    city: "Karachi",
    isStudent: true
  };
  
  console.log("Original Object:", person);
  
  // Access properties
  console.log("Name:", person.name);
  console.log("City:", person.city);
  console.log("Age :", person["age"]);
  console.log("Age :", person.age);
  
  // Add new property
  person.country = "Pakistan";
  console.log("After Adding Country:", person);
  
  // Update a property
  person.age = 26;
  console.log("After Updating Age:", person);
  
  // Delete a property
  delete person.isStudent;
  console.log("After Deleting isStudent:", person);
  
  // Method inside object
  person.greet = function() {
    console.log(`Hello, my name is ${this.name} and I live in ${this.city}.`);
  };
  
  person.greet(); // Calling the method
  
  // Loop through object
  console.log("Looping through properties:");
  for (let key in person) {
    console.log(key, ":", person[key]);
  }
  
  // Nested object example
  person.address = {
    street: "123 Main Road",
    zip: "75000"
  };
  
  console.log("Address Street:", person.address.street);
  