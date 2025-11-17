'use strict';
console.log('This is Module 2 part 3');

const Dogs = [];

for (let i = 0; i < 6; i++) {
  const DogName = prompt('enter Dog name ' + (i + 1));
  Dogs.push(DogName);
}

console.log(`Dogs: ${Dogs}`);

Dogs.sort();
Dogs.reverse();
console.log(`Dogs: ${Dogs}`);

let htmlout = '';

for (const name of Dogs) {
  htmlout += `<li>${name}</li>`;
}
console.log(htmlout);
const OrderedList = `<ul>${htmlout}</ul>`;

const container = document.getElementById('target');
container.innerHTML = OrderedList;

console.log(OrderedList);