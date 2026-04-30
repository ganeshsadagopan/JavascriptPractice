// ============================================
// JavaScript Operators with Explanations
// ============================================

console.log("===== 1. ARITHMETIC OPERATORS =====");
// Arithmetic operators perform mathematical calculations

const a = 10;
const b = 3;

console.log("Addition (+):", a + b);           // 10 + 3 = 13
console.log("Subtraction (-):", a - b);       // 10 - 3 = 7
console.log("Multiplication (*):", a * b);    // 10 * 3 = 30
console.log("Division (/):", a / b);          // 10 / 3 = 3.333...
console.log("Modulus (%):", a % b);           // 10 % 3 = 1 (remainder)
console.log("Exponentiation (**):", a ** b);  // 10 ** 3 = 1000
console.log("Increment (++):", ++a);          // Pre-increment: increases by 1 and returns
console.log("Decrement (--):", --b);          // Pre-decrement: decreases by 1 and returns

console.log("\n===== 2. ASSIGNMENT OPERATORS =====");
// Assignment operators assign values to variables

let x = 5;
console.log("Initial x:", x);

x += 3;     // x = x + 3 (same as: x = 5 + 3)
console.log("After x += 3:", x);  // 8

x -= 2;     // x = x - 2 (same as: x = 8 - 2)
console.log("After x -= 2:", x);  // 6

x *= 2;     // x = x * 2 (same as: x = 6 * 2)
console.log("After x *= 2:", x);  // 12

x /= 3;     // x = x / 3 (same as: x = 12 / 3)
console.log("After x /= 3:", x);  // 4

x %= 3;     // x = x % 3 (same as: x = 4 % 3)
console.log("After x %= 3:", x);  // 1

console.log("\n===== 3. COMPARISON OPERATORS =====");
// Comparison operators compare two values and return true or false

const num1 = 10;
const num2 = 5;

console.log("Equal (==):", num1 == "10");             // true (compares value only, ignores type)
console.log("Strict Equal (===):", num1 === "10");    // false (compares value and type)
console.log("Not Equal (!=):", num1 != num2);         // true
console.log("Strict Not Equal (!==):", num1 !== "10"); // true
console.log("Greater Than (>):", num1 > num2);        // true (10 > 5)
console.log("Less Than (<):", num1 < num2);           // false (10 < 5)
console.log("Greater or Equal (>=):", num1 >= num2);  // true (10 >= 5)
console.log("Less or Equal (<=):", num1 <= num2);     // false (10 <= 5)

console.log("\n===== 4. LOGICAL OPERATORS =====");
// Logical operators combine multiple conditions and return true or false

const isAdult = true;
const hasLicense = false;

console.log("AND (&&):", isAdult && hasLicense);      // false (both must be true)
console.log("OR (||):", isAdult || hasLicense);       // true (at least one must be true)
console.log("NOT (!):", !isAdult);                    // false (flips the boolean value)

// Practical example
const age = 20;
const income = 50000;
const canBuyHouse = (age >= 18) && (income >= 40000);
console.log("Can buy house (20 years old, 50k income):", canBuyHouse); // true

console.log("\n===== 5. STRING OPERATORS =====");
// String concatenation operators combine strings

const firstName = "Ganesh";
const lastName = "Kumar";

console.log("Concatenation (+):", firstName + " " + lastName);  // "Ganesh Kumar"
console.log("Template Literal:"); 
console.log(`Full Name: ${firstName} ${lastName}`);  // "Full Name: Ganesh Kumar" (easier to read)

// String concatenation with numbers
const str = "Age: ";
const myAge = 25;
console.log(str + myAge);  // "Age: 25"

console.log("\n===== 6. TERNARY OPERATOR (Conditional Operator) =====");
// The ternary operator is a shorthand for if-else statements

const grade = 85;
const result = grade >= 50 ? "Pass" : "Fail";
console.log("Grade 85 result:", result);  // "Pass"

// Nested ternary
const marks = 75;
const performance = marks >= 80 ? "Excellent" : marks >= 60 ? "Good" : "Average";
console.log("Performance with 75 marks:", performance);  // "Good"

console.log("\n===== 7. TYPEOF OPERATOR =====");
// The typeof operator returns the data type of a value

console.log("typeof 42:", typeof 42);                           // "number"
console.log("typeof 'hello':", typeof "hello");                 // "string"
console.log("typeof true:", typeof true);                       // "boolean"
console.log("typeof undefined:", typeof undefined);             // "undefined"
console.log("typeof null:", typeof null);                       // "object" (quirk in JavaScript!)
console.log("typeof {name: 'Ganesh'}:", typeof {name: "Ganesh"}); // "object"
console.log("typeof [1,2,3]:", typeof [1, 2, 3]);               // "object" (arrays are objects)
console.log("typeof function(){}:", typeof function(){});       // "function"

console.log("\n===== 8. BITWISE OPERATORS =====");
// Bitwise operators work on binary representations of numbers

const bit1 = 5;   // binary: 0101
const bit2 = 3;   // binary: 0011

console.log("Bitwise AND (&):", bit1 & bit2);        // 1 (0001)
console.log("Bitwise OR (|):", bit1 | bit2);         // 7 (0111)
console.log("Bitwise XOR (^):", bit1 ^ bit2);        // 6 (0110)
console.log("Bitwise NOT (~):", ~bit1);              // -6
console.log("Left Shift (<<):", bit1 << 1);          // 10 (0101 becomes 1010)
console.log("Right Shift (>>):", bit1 >> 1);         // 2 (0101 becomes 0010)

console.log("\n===== 9. OPERATOR PRECEDENCE =====");
// Operators are evaluated in a specific order of precedence

console.log("2 + 3 * 4:", 2 + 3 * 4);        // 14 (multiplication first, then addition)
console.log("(2 + 3) * 4:", (2 + 3) * 4);    // 20 (parentheses have highest precedence)

console.log("\n===== QUICK REFERENCE =====");
console.log("Arithmetic: +, -, *, /, %, **, ++, --");
console.log("Assignment: =, +=, -=, *=, /=, %=");
console.log("Comparison: ==, ===, !=, !==, >, <, >=, <=");
console.log("Logical: &&, ||, !");
console.log("String: +, `` (template literals)");
console.log("Conditional: ? :");
console.log("Type: typeof");
console.log("Bitwise: &, |, ^, ~, <<, >>");
