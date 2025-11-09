`use strict`;

const year = parseInt(prompt("Enter a year:"), 10);
let output;
if (isNaN(year)) {
    output = `Year entered is not valid ! `
    document.querySelector("#target").innerHTML = output;
} else
    {
    Leap = false;
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        Leap = true;
      }
      if (Leap === true) {
        output = ` ${year} is a leap year!`
        document.querySelector("#target").innerHTML = output;
      } else {

        output = ` ${year} is not a leap year!`
          document.querySelector("#target").innerHTML = output;
      }
    }