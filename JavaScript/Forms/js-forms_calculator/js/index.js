console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const a = Number(event.target.elements.numberA.value);
  const b = Number(event.target.elements.numberB.value);
  const operation = event.target.elements.operator.value;

  let result;

  switch (operation) {
    case "addition":
      result = add(a, b);
      break;
    case "subtraction":
      result = subtract(a, b);
      break;
    case "multiplication":
      result = multiply(a, b);
      break;
    case "division":
      result = divide(a, b);
      break;
    default:
      result = "Ungültige Rechnung";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
