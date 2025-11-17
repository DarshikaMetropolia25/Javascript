const div = document.getElementById('target')
let HtmlOut = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>'
const temp = document.createElement('ul');
temp.innerHTML = HtmlOut;

div.appendChild(temp);

const bullet = document.querySelectorAll('li')[1];

bullet.innerHTML = `<li class="my-item">Second item</li>`;
