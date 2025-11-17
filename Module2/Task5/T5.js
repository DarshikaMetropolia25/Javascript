'use strict';
console.log('This is Module 2 part 5');

const Nums = [];

while (true) {
  const num = prompt('Enter a number:');
  if (Nums.includes(num)) {
    alert('Number already entered');
    break;
  }
  Nums.push(num);
}

Nums.sort((a, b) => a - b);

console.log(`Numbers sorted: ${Nums}`);