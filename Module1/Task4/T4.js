`use strict`;

const name = prompt("What is your name?");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomInt(4);

let house;
    if (randomNumber === 0) {
    house = "Gryffindor";
    } else if (randomNumber === 1) {
    house = "Slytherin";
    } else if (randomNumber === 2) {
    house = "Ravenclaw";
    } else {
    house = "Hufflepuff";
    }

const greeting = `Hello ${name} you are ${house} !`
document.querySelector("#target").innerHTML = greeting;
