// callbacks & foreach

const myFunc = (callbackFunc) =>{
    // di something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);