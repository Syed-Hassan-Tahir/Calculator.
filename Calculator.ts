import * as readlineSync from 'readline-sync';

// Function to add two numbers
function add(x: number, y: number): number {
  return x + y;
}

// Function to subtract two numbers
function subtract(x: number, y: number): number {
  return x - y;
}

// Function to multiply two numbers
function multiply(x: number, y: number): number {
  return x * y;
}

// Function to divide two numbers
function divide(x: number, y: number): number {
  // Check if the divisor is not zero to avoid division by zero
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Cannot divide by zero");
  }
}

// Function to perform the calculation based on operator
function calculate(x: number, operator: string, y: number): number {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      throw new Error("Invalid operator");
  }
}

// Get user input
const num1Str: string = readlineSync.question("Enter the first number: ");
const operator: string = readlineSync.question("Enter the operator (+, -, *, /): ");
const num2Str: string = readlineSync.question("Enter the second number: ");

// Convert input strings to numbers
const num1: number = parseFloat(num1Str);
const num2: number = parseFloat(num2Str);

// Check if conversion is successful
if (isNaN(num1) || isNaN(num2)) {
  console.error("Invalid input. Please enter valid numbers.");
} else {
  // Perform calculation
  try {
    const result = calculate(num1, operator, num2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}