var number1;
var number2;
var result;

function add() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    result = Number(number1) + Number(number2);
    result = Math.round(result * 10000.0)/10000.0;
    document.getElementById("result").innerHTML = result;
}
function subtract() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    result = Number(number1) - Number(number2);
    result = Math.round(result * 10000.0)/10000.0;
    document.getElementById("result").innerHTML = result;
}
function multiply() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    result = Number(number1) * Number(number2);
    result = Math.round(result * 10000.0)/10000.0;
    document.getElementById("result").innerHTML = result;
}
function divide() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    result = Number(number1) / Number(number2);
    result = Math.round(result * 10000.0)/10000.0;
    document.getElementById("result").innerHTML = result;
}

