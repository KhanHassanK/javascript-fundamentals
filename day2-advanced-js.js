// Task 1: Array Manipulation
// Use map, filter, and reduce to solve these problems

// Solution:
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
// 1. Get array of product names
// using map to create a new array of product names
const productNames = products.map((product) => product.name);
console.log(productNames);
// 2. Get only products in stock
// using filter to create a new array of products that are in stock
const inStockProducts = products.filter((product) => product.inStock);
console.log(inStockProducts);
// 3. Calculate total price of in-stock products
// using reduce to calculate the total price of in-stock products
const totalPrice = inStockProducts.reduce(
  (total, product) => total + product.price,
  0,
);
console.log(totalPrice);
// 4. Get names of products costing more than 400
// using filter to get products that cost more than 400 and then map to get their names
const expensiveProducts = products
  .filter((product) => product.price > 400)
  .map((product) => product.name);
console.log(expensiveProducts);

// Task 2: Closure Function
// Create a function that uses closures

// Create a function makeMultiplier that returns a function
// The returned function should multiply its argument by the original number

// Solution:

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
console.log(double(10));
