function add(a, b) {
  return a + b;
}

function multiply(a, b = 1) {
  return a * b;
}

const square = (n) => n * n;

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function calculate(fn, a, b) {
  return fn(a, b);
}

// Test cases
console.log(add(3, 5)); // 8
console.log(multiply(4, 2)); // 8
console.log(multiply(7)); // 7
console.log(square(6)); // 36
console.log(divide(10, 2)); // 5
console.log(calculate(add, 10, 15)); // 25
console.log(calculate(multiply, 5, 3)); // 15
console.log(calculate(divide, 10, 2)); // 5