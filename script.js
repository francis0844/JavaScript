// Strings
console.log('hello, world');

let email = 'braposas84@gmail.com';
console.log(email);

// String Concatenation
let fName = "John";
let lName = "Doe";

let fullName = fName + ' ' + lName;

console.log(fullName);

// Getting Characters
console.log(fullName[2]); // Gets single character on a string (Counts from 0)

// String Length
console.log(fullName.length); // Number of letters on screen // This is a property NOT method

// String Methods // Methods is the process of doing something to the value while the 'length' will not do something to the variable but just counts it
console.log(fullName.toUpperCase()); // Methods have open and close parenthesis after the method name
let result = fullName.toLocaleLowerCase(); // Storing it to a variable with a method
console.log(result, fullName); // There are methods that can alter the original string that is in the value

let index = email.indexOf('@'); // Passing a value to a method is called arguments or parameters
console.log(index);