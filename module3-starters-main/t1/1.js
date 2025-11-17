'use strict';

let HtmlOut = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>'

document.getElementById('target').innerHTML = HtmlOut;

const second = document.getElementsByTagName('li')[1];


second.innerHTML = `<li class="my-list">Second item</li>`;