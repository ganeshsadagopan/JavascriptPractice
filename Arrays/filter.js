
let a=["sachin",100,true,'a']
console.log(a)

//write a program to filter the array and return only the string values
let strings = a.filter(item => typeof item === 'string');
console.log(strings);


let b=[1,2,3,4,5,6,7,8,9,10]
//write a program to filter the array and return only the even numbers
let evenNumbers = b.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Sample program using reduce function
// Sum all numbers in the array b
let sum = b.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce:", sum);

// Create an object counting even and odd numbers using reduce
let count = b.reduce((acc, num) => {
	if (num % 2 === 0) acc.even++;
	else acc.odd++;
	return acc;
}, { even: 0, odd: 0 });
console.log("Even and odd count using reduce:", count);

//-------------------------------------------------------------------
let a1 = [88, 50, 25, 10];
let sub = a1.reduce(geeks,0);

function geeks(tot, num) {
    console.log(tot, num);
    return tot - num;
}
console.log(sub);