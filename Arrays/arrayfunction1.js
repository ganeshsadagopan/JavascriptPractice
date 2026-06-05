let data=Array("sachin","shewag","virat","rohit","dhoni")
//console.log(data.sort())

// it will sort the array in alphabetical order

console.log(data)
var value= data.slice(1,3)
// slice(1,3) extracts elements from index 1 to 2 (end index is excluded), returns a new array without modifying the original
console.log(value)


data.reverse()
console.log(data)
// it will reverse the array

// ============ MORE ARRAY FUNCTIONS ============

// PUSH() - Add element to end
console.log("\n===== PUSH =====");
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log("After push:", fruits);
// adds one or more elements to the end of an array and returns the new length

// POP() - Remove element from end
console.log("\n===== POP =====");
let stack = [1, 2, 3, 4];
let popped = stack.pop();
console.log("Popped element:", popped);
console.log("After pop:", stack);
// removes the last element from an array and returns that element

// SHIFT() - Remove element from beginning
console.log("\n===== SHIFT =====");
let queue = ["first", "second", "third"];
let shifted = queue.shift();
console.log("Shifted element:", shifted);
console.log("After shift:", queue);
// removes the first element from an array and returns that element

// UNSHIFT() - Add element to beginning
console.log("\n===== UNSHIFT =====");
let nums = [2, 3, 4];
nums.unshift(1, 0);
console.log("After unshift:", nums);
// adds one or more elements to the beginning of an array and returns the new length

// LENGTH - Get array size
console.log("\n===== LENGTH =====");
let arr = [10, 20, 30, 40, 50];
console.log("Array length:", arr.length);
// returns the number of elements in an array

// LASTINDEXOF() - Find last occurrence
console.log("\n===== LASTINDEXOF =====");
let items = [1, 2, 3, 2, 1];
console.log("Last index of 2:", items.lastIndexOf(2));
// returns the last index at which a given element can be found in the array

// FILL() - Fill array with value
console.log("\n===== FILL =====");
let emptyArr = new Array(5);
emptyArr.fill(0);
console.log("Filled array:", emptyArr);
// fills all array elements from start index to an end index with a static value

// COPY() - Create shallow copy
console.log("\n===== SLICE AS COPY =====");
let original = [1, 2, 3];
let copy = original.slice();
copy.push(4);
console.log("Original:", original);
console.log("Modified copy:", copy);
// slice without parameters creates a copy of entire array

// FOR...OF - Iterate array values
console.log("\n===== FOR...OF =====");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log("Color:", color);
}
// iterates over array values directly

// FOR...IN - Iterate array indices
console.log("\n===== FOR...IN =====");
let sports = ["Cricket", "Football", "Tennis"];
for (let index in sports) {
  console.log(`Index ${index}: ${sports[index]}`);
}
// iterates over array indices (keys)

// TOSTRING() - Convert to string
console.log("\n===== TOSTRING =====");
let numbers = [1, 2, 3, 4, 5];
let str = numbers.toString();
console.log("Array as string:", str);
// converts array to a string representation