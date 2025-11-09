`use strict`;

const name = prompt("Enter your name :")
const greeting = `Hello ${name} !`
console.log(greeting);
document.querySelector("#target").innerHTML = greeting;
