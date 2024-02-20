"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Function to add two numbers
function add(x, y) {
    return x + y;
}
// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}
// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}
// Function to divide two numbers
function divide(x, y) {
    // Check if the divisor is not zero to avoid division by zero
    if (y !== 0) {
        return x / y;
    }
    else {
        throw new Error("Cannot divide by zero");
    }
}
// Function to perform the calculation based on operator
function calculate(x, operator, y) {
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
const num1Str = readlineSync.question("Enter the first number: ");
const operator = readlineSync.question("Enter the operator (+, -, *, /): ");
const num2Str = readlineSync.question("Enter the second number: ");
// Convert input strings to numbers
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);
// Check if conversion is successful
if (isNaN(num1) || isNaN(num2)) {
    console.error("Invalid input. Please enter valid numbers.");
}
else {
    // Perform calculation
    try {
        const result = calculate(num1, operator, num2);
        console.log(`Result: ${result}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
