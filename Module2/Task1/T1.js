'use strict';
console.log('This is Module 2 part 1');
alert('Enter 5 numbers, one by one');

const fiveNumbers = [];

for (let i = 0; i < 5; i++) {
  const Numbers = prompt('enter number ' + i + 1);
  fiveNumbers.push(Numbers);
}

for (let i = 4; i >= 0; i--) {
  console.log(`Number: ${fiveNumbers[i]}`);
}
