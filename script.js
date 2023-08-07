// object literals
let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['blog 1', 'blog 2']
};

console.log(user);
console.log(user.name);

user.age = 35; //Updating the current variable inside the object

console.log(user.age);

console.log(user['name']);

user['name'] = 'shaun'; //Updating the current variable inside the object

console.log(user['name']);