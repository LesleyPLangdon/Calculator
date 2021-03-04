function validateD() {
  var y = parseInt(document.getElementById("snInput").value);
  if (y == 0) {
    alert("You may not divide by zero, please try again.");
  }
}

function readInput() {
  var x = parseFloat(document.getElementById("fnInput").value);
  var y = parseFloat(document.getElementById("snInput").value);
  validate(x, y);
}

function validate(x, y) {
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter 2 numbers and try again.");
  } else {
    calculate(x, y);
  }
}

function calculate(x, y) {
  var result;
  if (document.getElementById("add").checked == true) {
    result = x + y;
    document.getElementById(
      "result"
    ).innerHTML = `The result of adding ${x} and ${y} is ${result}`;
  } else if (document.getElementById("subtract").checked == true) {
    result = x - y;
    document.getElementById(
      "result"
    ).innerHTML = `The result of subtracting ${y} from ${x} is ${result}`;
  } else if (document.getElementById("multiply").checked == true) {
    result = x * y;
    document.getElementById(
      "result"
    ).innerHTML = `The result of multiplying ${x} and ${y} is ${result}`;
  } else {
    if (y == 0) {
        alert("You may not divide by zero, please try again.");}
      else{
    result = x / y;
    document.getElementById(
      "result"
    ).innerHTML = `The result of dividing ${x} by ${y} is ${result}`;
  }
  }
}

function clr() {
  document.getElementById("inputForm").reset();
  document.getElementById("fnInput").focus();
  document.getElementById("result").innerHTML = "";
}
