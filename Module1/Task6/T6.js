`use strict`;
let confirmation = confirm("Should I calculate the square root?");

    if (confirmation===true) {

      number = parseFloat(prompt("Enter a number:"));

      if (number < 0) {
           output = ` The square root of a negative number is not defined.`
        document.querySelector("#target").innerHTML = output;
      }

      else {
          sqrtValue = Math.sqrt(number);
        output = `the squareroot of ${number} is ${sqrtValue}`
        document.querySelector("#target").innerHTML = output;
      }
    }
    else {
      output = `The square root is not calculated.`
        document.querySelector("#target").innerHTML = output;
    }