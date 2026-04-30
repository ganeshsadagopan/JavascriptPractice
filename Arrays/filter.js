
let a=["sachin",100,true,'a']
console.log(a)

//write a program to filter the array and return only the string values
let strings = a.filter(item => typeof item === 'string');
console.log(strings);


let b=[1,2,3,4,5,6,7,8,9,10]
//write a program to filter the array and return only the even numbers
let evenNumbers = b.filter(num => num % 2 === 0);
console.log(evenNumbers);