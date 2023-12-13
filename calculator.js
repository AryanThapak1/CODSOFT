let currentInput = '0';
let operator = null;
let firstOperand = null;

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function appendPercentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  firstOperand = currentInput;
  currentInput = '0';
  updateDisplay();
}

function calculate() {
  if (operator === null || firstOperand === null) {
    return;
  }
  const secondOperand = currentInput;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = null;
  firstOperand = null;
  updateDisplay();
}
