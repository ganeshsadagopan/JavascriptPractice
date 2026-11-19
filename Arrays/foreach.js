// ==========================================
// Array.prototype.forEach() - Complete Guide
// ==========================================

// WHAT IS forEach()?
// forEach() executes a provided function ONCE for each element in the array.
// It does NOT return anything (returns undefined).
// It does NOT create a new array.
// It is used for SIDE EFFECTS: logging, updating external variables, DOM changes, etc.
//
// Syntax:  array.forEach(callback(currentValue, index, array), thisArg)
//
// Parameters:
//   callback     - Function executed for each element. Receives 3 arguments:
//       currentValue - The current element being processed
//       index        - The index of the current element (optional)
//       array        - The original array forEach was called on (optional)
//   thisArg      - Value to use as 'this' inside callback (optional, rarely used)
//
// Returns: undefined (ALWAYS)


// ==========================================
// 1. BASIC USAGE - Loop through each element
// ==========================================

const fruits = ["apple", "banana", "cherry", "mango"];

// Simple: print each fruit
console.log("--- Basic forEach ---");
fruits.forEach(function (fruit) {
    console.log(fruit);
});
// Output:
// apple
// banana
// cherry
// mango

// Same thing with arrow function (shorter)
console.log("\n--- Arrow function ---");
fruits.forEach(fruit => console.log(fruit));


// ==========================================
// 2. USING INDEX parameter
// ==========================================

console.log("\n--- With Index ---");
const colors = ["red", "green", "blue", "yellow"];

colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});
// Output:
// 0: red
// 1: green
// 2: blue
// 3: yellow


// ==========================================
// 3. USING ALL THREE parameters
// ==========================================

console.log("\n--- All Three Parameters ---");
const scores = [85, 92, 78, 95];

scores.forEach((score, index, array) => {
    const position = index === 0 ? "First" : index === array.length - 1 ? "Last" : `#${index + 1}`;
    console.log(`${position} score: ${score} (out of ${array.length} total)`);
});
// Output:
// First score: 85 (out of 4 total)
// #2 score: 92 (out of 4 total)
// #3 score: 78 (out of 4 total)
// Last score: 95 (out of 4 total)


// ==========================================
// 4. forEach() with OBJECTS in an array
// ==========================================

console.log("\n--- Objects ---");
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];

// Print formatted student info
students.forEach(student => {
    console.log(`${student.name} received grade: ${student.grade}`);
});
// Output:
// Alice received grade: A
// Bob received grade: B
// Charlie received grade: C


// ==========================================
// 5. MODIFYING an external variable (side effect)
// ==========================================

console.log("\n--- Sum using forEach ---");
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

numbers.forEach(num => {
    sum += num;  // updating variable outside the callback
});
console.log("Sum:", sum); // 150

// Building a new structure manually
console.log("\n--- Building object with forEach ---");
const items = ["pen", "book", "pen", "eraser", "book", "pen"];
const count = {};

items.forEach(item => {
    count[item] = (count[item] || 0) + 1;
});
console.log("Item counts:", count);
// { pen: 3, book: 2, eraser: 1 }


// ==========================================
// 6. forEach() vs for LOOP
// ==========================================

console.log("\n--- for loop vs forEach ---");
const animals = ["cat", "dog", "bird"];

// Traditional for loop
console.log("for loop:");
for (let i = 0; i < animals.length; i++) {
    console.log(`  ${i}: ${animals[i]}`);
}

// forEach - cleaner, no index management needed
console.log("forEach:");
animals.forEach((animal, i) => {
    console.log(`  ${i}: ${animal}`);
});

// Both produce the same output, but forEach is more readable


// ==========================================
// 7. forEach() vs map() - IMPORTANT DIFFERENCE
// ==========================================

console.log("\n--- forEach vs map ---");
const nums = [1, 2, 3, 4, 5];

// forEach: returns undefined, used for side effects
const forEachResult = nums.forEach(n => n * 2);
console.log("forEach returns:", forEachResult); // undefined

// map: returns a NEW array, used for transformations
const mapResult = nums.map(n => n * 2);
console.log("map returns:", mapResult); // [2, 4, 6, 8, 10]

// RULE OF THUMB:
// Need a new array?       → use map()
// Just doing something?   → use forEach()


// ==========================================
// 8. forEach() CANNOT BE STOPPED (no break)
// ==========================================

console.log("\n--- Cannot break forEach ---");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// You CANNOT use break or continue inside forEach
// This will throw a SyntaxError:
// data.forEach(n => {
//     if (n === 5) break;  // ERROR!
// });

// WORKAROUND 1: Use return to skip current iteration (like continue)
console.log("Skip even numbers:");
data.forEach(n => {
    if (n % 2 === 0) return;  // skips this iteration only, NOT the whole loop
    console.log(n);
});
// Output: 1, 3, 5, 7, 9

// WORKAROUND 2: If you need to break, use a for...of loop instead
console.log("Break at 5 (use for...of):");
for (const n of data) {
    if (n === 5) break;  // this works!
    console.log(n);
}
// Output: 1, 2, 3, 4


// ==========================================
// 9. forEach() with STRINGS (convert to array first)
// ==========================================

console.log("\n--- forEach with strings ---");
const word = "Hello";

// Convert string to array, then forEach
word.split("").forEach((char, i) => {
    console.log(`Character ${i}: '${char}'`);
});
// Character 0: 'H'
// Character 1: 'e'
// ...

// Or use spread operator
[...word].forEach((char, i) => {
    console.log(`Letter ${i + 1}: ${char}`);
});


// ==========================================
// 10. NESTED forEach - Looping arrays inside arrays
// ==========================================

console.log("\n--- Nested forEach ---");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        console.log(`Row ${rowIndex}, Col ${colIndex} = ${cell}`);
    });
});
// Row 0, Col 0 = 1
// Row 0, Col 1 = 2
// ... and so on


// ==========================================
// 11. forEach() on a MAP and SET (not just arrays!)
// ==========================================

console.log("\n--- forEach on Map ---");
const userMap = new Map();
userMap.set("u1", "Alice");
userMap.set("u2", "Bob");
userMap.set("u3", "Charlie");

// Map's forEach: callback receives (value, key, map)
userMap.forEach((value, key) => {
    console.log(`${key} → ${value}`);
});
// u1 → Alice
// u2 → Bob
// u3 → Charlie

console.log("\n--- forEach on Set ---");
const uniqueNums = new Set([10, 20, 30, 20, 10]);

// Set's forEach: callback receives (value, value, set) — key and value are the same
uniqueNums.forEach(value => {
    console.log(value);
});
// 10, 20, 30 (duplicates removed)


// ==========================================
// 12. REAL-WORLD EXAMPLES
// ==========================================

// Example A: Validate form fields
console.log("\n--- Validate Fields ---");
const formFields = [
    { name: "username", value: "john_doe" },
    { name: "email", value: "" },
    { name: "password", value: "secret123" },
    { name: "phone", value: "" }
];

const errors = [];
formFields.forEach(field => {
    if (!field.value) {
        errors.push(`${field.name} is required`);
    }
});
console.log("Validation errors:", errors);
// ["email is required", "phone is required"]


// Example B: Update prices with tax
console.log("\n--- Update Prices ---");
const products = [
    { name: "Shirt", price: 25 },
    { name: "Pants", price: 40 },
    { name: "Shoes", price: 60 }
];

// forEach CAN modify objects in the original array (because objects are references)
products.forEach(product => {
    product.priceWithTax = +(product.price * 1.18).toFixed(2);
});
console.log("Products with tax:", products);
// [{ name: "Shirt", price: 25, priceWithTax: 29.5 }, ...]


// Example C: Group items by category
console.log("\n--- Group by Category ---");
const inventory = [
    { item: "Apple", category: "Fruit" },
    { item: "Carrot", category: "Vegetable" },
    { item: "Banana", category: "Fruit" },
    { item: "Broccoli", category: "Vegetable" },
    { item: "Milk", category: "Dairy" }
];

const grouped = {};
inventory.forEach(({ item, category }) => {
    if (!grouped[category]) {
        grouped[category] = [];
    }
    grouped[category].push(item);
});
console.log("Grouped:", grouped);
// { Fruit: ["Apple", "Banana"], Vegetable: ["Carrot", "Broccoli"], Dairy: ["Milk"] }


// ==========================================
// 13. COMMON MISTAKES
// ==========================================

// MISTAKE 1: Trying to use the return value
const result = [1, 2, 3].forEach(n => n * 2);
console.log("\nMistake - forEach return:", result); // undefined
// FIX: Use map() if you need a returned array

// MISTAKE 2: Trying to break out of forEach
// forEach runs for ALL elements — you cannot stop it early
// FIX: Use for...of or for loop if you need break/continue

// MISTAKE 3: Using forEach to build a new array
const bad = [];
[1, 2, 3].forEach(n => bad.push(n * 2));
console.log("Works but bad practice:", bad); // [2, 4, 6]
// FIX: Just use map() → const good = [1,2,3].map(n => n * 2);

// MISTAKE 4: forEach on undefined/null
// const nothing = null;
// nothing.forEach(x => x);  // TypeError: Cannot read property 'forEach' of null
// FIX: Always check: if (array) array.forEach(...)


// ==========================================
// SUMMARY
// ==========================================
// - forEach() loops through every element and runs a function
// - It ALWAYS returns undefined — never assign its result
// - It CANNOT be stopped with break (use for...of instead)
// - Use return inside forEach to SKIP an iteration (like continue)
// - forEach CAN mutate objects in the array (they are references)
// - Use forEach for SIDE EFFECTS (logging, updating, DOM, etc.)
// - Use map() when you need a NEW ARRAY back
// - Works on Arrays, Maps, and Sets
