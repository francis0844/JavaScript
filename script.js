const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://youtube.com');
link.innerText = 'Youtube';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: red');