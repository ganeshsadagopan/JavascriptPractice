// ==========================================
// Array.prototype.map() - Complete Guide
// ==========================================

// WHAT IS map()?
// map() creates a NEW array by calling a function on EVERY element of the original array.
// It does NOT modify the original array (it is non-mutating).
//
// Syntax:  array.map(callback(currentValue, index, array), thisArg)
//
// Parameters:
//   callback    - Function called for each element. Receives 3 arguments:
//       currentValue - The current element being processed
//       index        - The index of the current element (optional)
//       array        - The original array map was called on (optional)
//   thisArg     - Value to use as 'this' inside callback (optional, rarely used)
//
// Returns: A new array with the results of calling the callback on every element.


// ==========================================
// 1. BASIC USAGE - Transform each element
// ==========================================

const numbers = [1, 2, 3, 4, 5];

// Double every number
const doubled = numbers.map(function (num) {
    return num * 2;
});
console.log("Original:", numbers);   // [1, 2, 3, 4, 5] - unchanged!
console.log("Doubled:", doubled);    // [2, 4, 6, 8, 10]

// Same thing with arrow function (shorter syntax)
const tripled = numbers.map(num => num * 3);
console.log("Tripled:", tripled);    // [3, 6, 9, 12, 15]


// ==========================================
// 2. USING THE INDEX parameter
// ==========================================

const fruits = ["apple", "banana", "cherry"];

const numbered = fruits.map((fruit, index) => {
    return `${index + 1}. ${fruit}`;
});
console.log("Numbered:", numbered);
// ["1. apple", "2. banana", "3. cherry"]


// ==========================================
// 3. TRANSFORMING STRINGS
// ==========================================

const names = ["john", "jane", "bob"];

// Capitalize first letter
const capitalized = names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log("Capitalized:", capitalized); // ["John", "Jane", "Bob"]

// Get lengths of each string
const lengths = names.map(name => name.length);
console.log("Lengths:", lengths); // [4, 4, 3]


// ==========================================
// 4. WORKING WITH OBJECTS
// ==========================================

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

// Extract just the names
const studentNames = students.map(student => student.name);
console.log("Names:", studentNames); // ["Alice", "Bob", "Charlie"]

// Add a grade property based on score
const withGrades = students.map(student => {
    return {
        ...student,  // spread operator copies existing properties
        grade: student.score >= 90 ? "A" : student.score >= 80 ? "B" : "C"
    };
});
console.log("With Grades:", withGrades);
// [{ name: "Alice", score: 85, grade: "B" }, { name: "Bob", score: 92, grade: "A" }, ...]


// ==========================================
// 5. map() vs forEach() - KEY DIFFERENCE
// ==========================================

// forEach: does something with each element, returns undefined
// map:     transforms each element, returns a NEW array

const nums = [1, 2, 3];

// forEach - no return value
const forEachResult = nums.forEach(n => n * 2);
console.log("forEach returns:", forEachResult); // undefined

// map - returns new array
const mapResult = nums.map(n => n * 2);
console.log("map returns:", mapResult); // [2, 4, 6]


// ==========================================
// 6. map() vs for LOOP - Same result, cleaner code
// ==========================================

const prices = [10, 20, 30, 40];

// Traditional for loop approach
const taxedFor = [];
for (let i = 0; i < prices.length; i++) {
    taxedFor.push(prices[i] * 1.1);  // add 10% tax
}
console.log("For loop:", taxedFor);

// map approach - same result, much cleaner
const taxedMap = prices.map(price => price * 1.1);
console.log("Map:", taxedMap);


// ==========================================
// 7. CHAINING map() with other array methods
// ==========================================

const rawData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain: filter even numbers, then double them
const result = rawData
    .filter(n => n % 2 === 0)   // [2, 4, 6, 8, 10]
    .map(n => n * 2);            // [4, 8, 12, 16, 20]
console.log("Chained:", result);

// Chain: map then filter
const processed = rawData
    .map(n => n * n)              // square all: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    .filter(n => n > 20);         // keep > 20: [25, 36, 49, 64, 81, 100]
console.log("Squared then filtered:", processed);


// ==========================================
// 8. CONVERTING DATA TYPES
// ==========================================

// String numbers to actual numbers
const stringNums = ["1", "2", "3", "4"];
const actualNums = stringNums.map(Number);  // shorthand: pass Number as callback
console.log("Converted:", actualNums); // [1, 2, 3, 4]

// Numbers to strings
const backToStrings = actualNums.map(String);
console.log("Back to strings:", backToStrings); // ["1", "2", "3", "4"]

// Booleans from values
const values = [0, 1, "", "hello", null, 42];
const booleans = values.map(Boolean);
console.log("Booleans:", booleans); // [false, true, false, true, false, true]


// ==========================================
// 9. REAL-WORLD EXAMPLE: API Data Transformation
// ==========================================

// Simulating raw API response
const apiResponse = [
    { id: 1, first_name: "John", last_name: "Doe", email_address: "john@example.com" },
    { id: 2, first_name: "Jane", last_name: "Smith", email_address: "jane@example.com" }
];

// Transform to the format your app needs
const users = apiResponse.map(user => ({
    id: user.id,
    fullName: `${user.first_name} ${user.last_name}`,
    email: user.email_address
}));
console.log("Transformed users:", users);
// [{ id: 1, fullName: "John Doe", email: "john@example.com" }, ...]


// ==========================================
// 10. COMMON MISTAKES TO AVOID
// ==========================================

// MISTAKE 1: Forgetting to return
const wrong = [1, 2, 3].map(n => {
    n * 2;  // no return! Using {} braces requires explicit return
});
console.log("Mistake - no return:", wrong); // [undefined, undefined, undefined]

// CORRECT: with return
const correct = [1, 2, 3].map(n => {
    return n * 2;
});
console.log("Correct - with return:", correct); // [2, 4, 6]

// ALSO CORRECT: arrow function without braces (implicit return)
const alsoCorrect = [1, 2, 3].map(n => n * 2);
console.log("Correct - implicit return:", alsoCorrect); // [2, 4, 6]

// MISTAKE 2: Using map when you don't need the returned array
// If you just want to loop, use forEach instead
// BAD:  array.map(item => console.log(item))  // creates unused array
// GOOD: array.forEach(item => console.log(item))


// ==========================================
// 11. map() with the THIRD parameter (the array itself)
// ==========================================

// Useful when you need to compare with other elements
const vals = [10, 20, 30, 40, 50];

const percentages = vals.map((val, index, array) => {
    const total = array.reduce((sum, n) => sum + n, 0);
    return `${((val / total) * 100).toFixed(1)}%`;
});
console.log("Percentages:", percentages);
// ["6.7%", "13.3%", "20.0%", "26.7%", "33.3%"]


// ==========================================
// SUMMARY
// ==========================================
// - map() always returns a NEW array of the SAME length
// - It does NOT modify the original array
// - Always return a value from the callback
// - Use map() when you want to TRANSFORM data
// - Use forEach() when you want SIDE EFFECTS (logging, saving, etc.)
// - map() is chainable with filter(), reduce(), sort(), etc.
// but for each is not chainable because it returns undefined.
