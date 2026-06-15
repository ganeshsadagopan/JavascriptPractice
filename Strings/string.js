// ============ STRINGS IN JAVASCRIPT ============
// A string is a sequence of characters used to represent text
// Strings are immutable - once created, they cannot be changed

// 1. CREATING STRINGS
console.log("===== CREATING STRINGS =====");
// Using double quotes
let str1 = "Hello World";
console.log("Double quotes:", str1);

// Using single quotes
let str2 = 'JavaScript';
console.log("Single quotes:", str2);

// Using backticks (template literals)
let str3 = `Programming is fun`;
console.log("Backticks:", str3);

// Using String constructor
let str4 = String(123);
console.log("String constructor:", str4);


// 2. LENGTH PROPERTY
console.log("\n===== LENGTH PROPERTY =====");
let message = "JavaScript";
console.log("String:", message);
console.log("Length:", message.length);
// returns the number of characters in a string


// 3. ACCESSING CHARACTERS
console.log("\n===== ACCESSING CHARACTERS =====");
let text = "Hello";
console.log("Character at index 0:", text[0]); // Using bracket notation
console.log("Character at index 1:", text[1]);
console.log("Character at index 4:", text[4]);


// 4. CHARAT() - Get character at specific index
console.log("\n===== CHARAT() =====");
let name = "Sachin";
console.log("Character at index 0:", name.charAt(0));
console.log("Character at index 3:", name.charAt(3));
console.log("Character at index 10:", name.charAt(10)); // returns empty string if out of bounds


// 5. CHARCODEAT() - Get character code
console.log("\n===== CHARCODEAT() =====");
let char = "A";
console.log("Character:", char);
console.log("Character code:", char.charCodeAt(0));
// returns the Unicode value of the character


// 6. INDEXOF() - Find first occurrence
console.log("\n===== INDEXOF() =====");
let sentence = "JavaScript is fun and JavaScript is powerful";
console.log("Index of 'is':", sentence.indexOf("is"));
console.log("Index of 'fun':", sentence.indexOf("fun"));
console.log("Index of 'xyz':", sentence.indexOf("xyz")); // returns -1 if not found


// 7. LASTINDEXOF() - Find last occurrence
console.log("\n===== LASTINDEXOF() =====");
console.log("Last index of 'JavaScript':", sentence.lastIndexOf("JavaScript"));
console.log("Last index of 'is':", sentence.lastIndexOf("is"));


// 8. INCLUDES() - Check if string contains substring
console.log("\n===== INCLUDES() =====");
let str = "Hello World";
console.log("Contains 'World':", str.includes("World"));
console.log("Contains 'xyz':", str.includes("xyz"));
// returns true or false


// 9. STARTSWITH() - Check if string starts with substring
console.log("\n===== STARTSWITH() =====");
let greeting = "Hello JavaScript";
console.log("Starts with 'Hello':", greeting.startsWith("Hello"));
console.log("Starts with 'JS':", greeting.startsWith("JS"));


// 10. ENDSWITH() - Check if string ends with substring
console.log("\n===== ENDSWITH() =====");
console.log("Ends with 'Script':", greeting.endsWith("Script"));
console.log("Ends with 'JavaScript':", greeting.endsWith("JavaScript"));


// 11. SLICE() - Extract part of string
console.log("\n===== SLICE() =====");
let original = "JavaScript";
console.log("Original:", original);
console.log("Slice(0, 4):", original.slice(0, 4)); // "Java"
console.log("Slice(4):", original.slice(4)); // "Script"
console.log("Slice(-6):", original.slice(-6)); // "Script" (last 6 characters)


// 12. SUBSTRING() - Extract part of string
console.log("\n===== SUBSTRING() =====");
let word = "Programming";
console.log("Original:", word);
console.log("Substring(0, 7):", word.substring(0, 7)); // "Program"
console.log("Substring(3):", word.substring(3)); // "gramming"
// similar to slice but doesn't accept negative indices


// 13. SUBSTR() - Extract substring of given length
console.log("\n===== SUBSTR() =====");
console.log("Substr(0, 4):", word.substr(0, 4)); // "Prog"
console.log("Substr(7, 3):", word.substr(7, 3)); // "mmi"
// extracts characters starting at index with specified length


// 14. TOUPPERCASE() - Convert to uppercase
console.log("\n===== TOUPPERCASE() =====");
let lower = "hello world";
console.log("Original:", lower);
console.log("Uppercase:", lower.toUpperCase());


// 15. TOLOWERCASE() - Convert to lowercase
console.log("\n===== TOLOWERCASE() =====");
let upper = "HELLO WORLD";
console.log("Original:", upper);
console.log("Lowercase:", upper.toLowerCase());


// 16. TRIM() - Remove whitespace from both ends
console.log("\n===== TRIM() =====");
let spaced = "  Hello World  ";
console.log("Original length:", spaced.length);
console.log("Trimmed:", spaced.trim());
console.log("Trimmed length:", spaced.trim().length);
// removes spaces, tabs, and line breaks from both ends


// 17. TRIMLEFT() / TRIMSTART() - Remove whitespace from start
console.log("\n===== TRIMSTART() =====");
console.log("TrimStart:", spaced.trimStart());


// 18. TRIMRIGHT() / TRIMEND() - Remove whitespace from end
console.log("\n===== TRIMEND() =====");
console.log("TrimEnd:", spaced.trimEnd());


// 19. CONCAT() - Join strings
console.log("\n===== CONCAT() =====");
let str5 = "Hello";
let str6 = "World";
let str7 = "!";
console.log("Concatenated:", str5.concat(" ", str6, str7));


// 20. REPLACE() - Replace first occurrence
console.log("\n===== REPLACE() =====");
let text2 = "cat cat cat";
console.log("Original:", text2);
console.log("Replace 'cat' with 'dog':", text2.replace("cat", "dog"));
// replaces only the first occurrence


// 21. REPLACEALL() - Replace all occurrences
console.log("\n===== REPLACEALL() =====");
console.log("ReplaceAll 'cat' with 'dog':", text2.replaceAll("cat", "dog"));
// replaces all occurrences


// 22. SPLIT() - Convert string to array
console.log("\n===== SPLIT() =====");
let csv = "apple,banana,orange,grapes";
console.log("Original:", csv);
console.log("Split by ',':", csv.split(","));

let words = "one two three four";
console.log("Split by space:", words.split(" "));

let chars = "hello";
console.log("Split into characters:", chars.split(""));


// 23. REPEAT() - Repeat string multiple times
console.log("\n===== REPEAT() =====");
let pattern = "Ha";
console.log("Repeat 5 times:", pattern.repeat(5));


// 24. PADSTART() - Pad string from start
console.log("\n===== PADSTART() =====");
let num = "5";
console.log("Original:", num);
console.log("PadStart to 3 chars with '0':", num.padStart(3, "0"));
console.log("PadStart to 5 chars with '*':", num.padStart(5, "*"));


// 25. PADEND() - Pad string from end
console.log("\n===== PADEND() =====");
console.log("PadEnd to 5 chars with '-':", num.padEnd(5, "-"));


// 26. MATCH() - Find all matches of pattern
console.log("\n===== MATCH() =====");
let text3 = "The number is 123 and 456";
console.log("Original:", text3);
console.log("Match all numbers:", text3.match(/\d+/g));


// 27. SEARCH() - Find index of pattern match
console.log("\n===== SEARCH() =====");
console.log("Search for numbers:", text3.search(/\d+/));
// returns index of first match, -1 if not found


// 28. TEMPLATE LITERALS - String interpolation
console.log("\n===== TEMPLATE LITERALS =====");
let firstName = "Sachin";
let lastName = "Tendulkar";
let age = 50;
console.log(`Full name: ${firstName} ${lastName}, Age: ${age}`);
// allows embedding expressions in strings


// 29. STRING COMPARISON
console.log("\n===== STRING COMPARISON =====");
let str8 = "apple";
let str9 = "apple";
let str10 = "Apple";
console.log("'apple' === 'apple':", str8 === str9);
console.log("'apple' === 'Apple':", str8 === str10); // case sensitive
console.log("'apple' == 'apple':", str8 == str9);


// 30. LOCALECOMPARE() - Compare strings
console.log("\n===== LOCALECOMPARE() =====");
console.log("'apple' compared to 'banana':", "apple".localeCompare("banana"));
console.log("'zebra' compared to 'apple':", "zebra".localeCompare("apple"));
// returns negative, 0, or positive number