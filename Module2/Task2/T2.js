'use strict';
console.log('This is Module 2 part 2');
const numParticipants = prompt('How many participants ?');

const Participants = [];

for (let i = 0; i < numParticipants; i++) {
  const Names = prompt('enter name ' + (i + 1));
  Participants.push(Names);
}

console.log(`Names: ${Participants}`)

;
Participants.sort();
console.log(`Names: ${Participants}`);

let htmlout = '';

for (const name of Participants) {
  htmlout += `<li>${name}</li>`;
}
console.log(htmlout);
const OrderedList = `<ol>${htmlout}</ol>`;

const container = document.getElementById('target');
container.innerHTML = OrderedList;

console.log(OrderedList);