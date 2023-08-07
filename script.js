// Type Conversion
let score = "100"; //changing the type of data

score = Number(score);

console.log(score + 1);
console.log(typeof score); // Checks the dataType

// let result = Number('hello'); // Returns NaN because it is not a number
// let result = String(50); // Returns String
// let result = Boolean(100); // [Number] Positive - True, 0 and Negative - False
let result = Boolean('0'); // [String] When there is a value, true. vice-versa

console.log(result, typeof result); 