const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px"; //This way will nor overwrite the current styles
title.style.color = "red";
title.style.fontSize = "50px";
title.style.margin = ""; //Removes style