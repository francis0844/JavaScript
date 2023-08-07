// variables & block scope

let age = 30; // Global score - it can be accessed anywhere in the file

if(true){
    let age = 40; // Redifining variable inside a code block will be returned only by what is inside the cide block
    let name = 'shaun'; //Only accessible inside a code block (local scope)
    console.log("inside if: ", age, name );
}

console.log("outside if: ", age, name );