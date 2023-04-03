const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//mengambil nilai
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

//merubah nilai ke screen
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

//memberikan number ke current number
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

//mengambil nilai dari operator
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

//memindahkan nilai ke operator
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

//menambahkan logic untuk =
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
  console.log("equal button is pressed");
});

//fungsi kalkulasi
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break;
    default: 
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

//fungsi clear nilai
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
  console.log('AC button clicked');
});

//fungsi reset
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

//nilai decimal
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
  console.log("decimal is pressed");
});

//menambahkan titik pada current number
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};