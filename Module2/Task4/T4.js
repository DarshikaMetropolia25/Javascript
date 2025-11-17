'use strict';
console.log('This is Module 2 part 4');

const Nums = [];
let num;
while (num!=0){
  num = prompt('Enter a number :');
  Nums.push(num);
}

console.log(`Numbers: ${Nums}`);

Nums.sort((a,b) => b-a);

console.log(`Numbers sorted: ${Nums}`);