// Template strings
const title = "Best reads of 2019";
const author = "John";
const likes = 30;

// Concatenation way
// let result = "The blog called " + title + " by " + author + ' has ' + likes + ' likes';
// console.log(result);

// Template String Way
let result = `The blog called ${title} by ${author} has ${likes} likes`; // Less messy way
console.log(result);

// Creating HTML templates
let html = `
    <h2>${title}<h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);