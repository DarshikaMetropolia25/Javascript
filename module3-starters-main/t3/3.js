'use strict';
const names = ['John', 'Paul', 'Jones'];

let HtmlOut = '';
for (const results of names) {
  HtmlOut += `<li>${results}</li>`;
}

document.getElementById('target').innerHTML = HtmlOut;