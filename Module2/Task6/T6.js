'use strict';
console.log('This is Module 2 part 6');
alert('Press OK to start rolling dice !');
function RollDice() {
  let result  = Math.floor(Math.random()*6)+1;
  return result;
}

let htmlout = '';
const Nums = [];

while (true) {
  let diceResult = RollDice()
  Nums.push(diceResult);
  if (diceResult == 6) {
    break;
  }
}

for (const results of Nums) {
  htmlout += `<li>${results}</li>`;
}

console.log(htmlout);
const OrderedList = `<ul>${htmlout}</ul>`;

const container = document.getElementById('target');
container.innerHTML = OrderedList;

console.log(OrderedList);