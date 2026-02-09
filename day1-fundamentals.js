// Task 1: Even/Odd Checker
// Write a function that checks if a number is even or odd

// Solution:
function isEven(number) {
  if (number % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}

// Test Cases
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));

// Task 2: Array Loop
// Loop through an array and print each element with its index

// Solution:

const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// Task 3: Array Sum Function
// Create a function that sums all numbers in an array

// Solution:

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Test Cases
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, 20, 30]));
console.log(sumArray([]));
