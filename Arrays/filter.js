
let a=["sachin",100,true,'a']
console.log(a)

//write a program to filter the array and return only the string values
let strings = a.filter(item => typeof item === 'string');
console.log(strings);


let b=[1,2,3,4,5,6,7,8,9,10]
//write a program to filter the array and return only the even numbers
let evenNumbers = b.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 3. Filter odd numbers
console.log("\n===== Filter Odd Numbers =====");
let c=[1,2,3,4,5,6,7,8,9,10]
let oddNumbers = c.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);
// filters array to return only odd numbers

// 4. Filter numbers greater than threshold
console.log("\n===== Filter Numbers > Threshold =====");
let d=[5, 15, 10, 25, 8, 30, 12]
let greaterThan15 = d.filter(num => num > 15);
console.log("Numbers > 15:", greaterThan15);
// filters numbers greater than 15

// 5. Filter objects by property
console.log("\n===== Filter Objects by Property =====");
let students = [
  {name: "Sachin", age: 20},
  {name: "Virat", age: 18},
  {name: "Rohit", age: 22},
  {name: "Dhoni", age: 25}
];
let adults = students.filter(student => student.age >= 21);
console.log("Adults (age >= 21):", adults);
// filters student objects where age is 21 or more

// 6. Filter out null/undefined values
console.log("\n===== Filter Out Null/Undefined =====");
let values = [10, null, 20, undefined, 30, '', 40];
let validValues = values.filter(val => val !== null && val !== undefined && val !== '');
console.log("Valid values:", validValues);
// removes null, undefined, and empty string values

// 7. Filter strings by length
console.log("\n===== Filter Strings by Length =====");
let words = ["JavaScript", "React", "Node", "CSS", "HTML", "TypeScript"];
let longWords = words.filter(word => word.length > 4);
console.log("Words with length > 4:", longWords);
// filters strings that have more than 4 characters

// 8. Filter and chain methods
console.log("\n===== Filter with Map Chain =====");
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers
  .filter(num => num > 2)
  .map(num => num * 2);
console.log("Filtered > 2, then doubled:", result);
// filters numbers > 2, then multiplies each by 2

