// Query selectors

// const para = document.querySelector('div.error');

// console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

paras.forEach(para => {
    console.log(para);
});

console.log(paras[0]);
console.log(errors);