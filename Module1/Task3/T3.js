`use strict`;
const number1 = parseInt(prompt("Enter the first integer:"));
const number2 = parseInt(prompt("Enter the second integer:"));
const number3 = parseInt(prompt("Enter the third integer:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

const output = "<p>Sum: " + sum + "</p>" +
"<p>Product: " + product + "</p>" +
"<p>Average: " + average + "</p>";


document.querySelector("#target").innerHTML = output;
