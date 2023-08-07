// Function declaration - This can still run even it comes after when we call it
function greet(){
    console.log('hello there');
}

// Function expression - This will not run if called after the code block itself
const speak =  function(){
    console.log('good day!');
};

greet();
speak();