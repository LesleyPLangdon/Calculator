var x;
var y;
var i;
var result;
var op;
function validate() {
  y = parseInt(document.getElementById("snInput").value);
  if (y == 0) {
    alert("You may not divide by zero, please try again.");
  }
}

function calculate() {
  
  x = parseFloat(document.getElementById("fnInput").value);
  y = parseFloat(document.getElementById("snInput").value);
  console.log(x);
  console.log(y);
  if (document.getElementById("add").checked == true) {
    result = x + y;
    op = "adding";
  } else if (document.getElementById("subtract").checked == true) {
    result = x - y;
    op = "subtracting";
  } else if (document.getElementById("multiply").checked == true) {
    result = x * y;
    op = "multiplying";
  } else {
    result = x / y;
    op = "dividing";
  }

  outputResult(result);
  console.log("got to calculate");
}
function outputResult(result) {
  document.getElementById(
    "result"
  ).innerHTML = `The result of ${op} ${x} and ${y} is ${result}`;
}
function clear() {
  console.log("clear function called");
  document.getElementById("inputForm").reset();
  document.getElementById("result").innerHTML = "";

  //    .focus()
}
