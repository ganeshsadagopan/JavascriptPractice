let a=Array(1,2,3,4,5)

const size=a.length
console.log(size)


a.pop()
console.log(a)
// The pop() method removes the last element from the array and returns that element. 

a.push(0)
console.log(a)
// The push() method adds a new element to the end of the array.


a.shift()
console.log(a)
// The shift() method removes the first element from the array and returns that element.

a.unshift(1)
a.unshift(100)

console.log(a)
// The unshift() method adds a new element to the beginning of the array.


console.log(a.indexOf(100) )
// it returns the index position


