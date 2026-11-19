// function

let k=function(a,b){
    return a+b
}
//Anonymous function assigned to variable 'k' that takes two parameters and returns their sum

let sum=k(10,20)
console.log(sum)
// This is a simple JavaScript program that defines a function 'add' using a function expression and assigns it to the variable 'k'. The function takes two parameters 'a' and 'b', adds them together, and returns the result. Then, the function is called with the arguments 10 and 20, and the result is stored in the variable 'sum', which is then printed to the console. 



let data=[10,20,30,40,50
]

let s=data.map(k=> { 
    return 10;
})
console.log(s)


function testing(a)
{
    if(a>10)
    {  console.log("master")
        return true;
    }
    else
    {
        return false;
    }

}

console.log(data.filter(k => testing(k)))   

console.log(data.map(k => {
    return 100;
}))   

console.log(data.map(function(k)
{
    return 80;
}))

console.log("---------------------------------------------------------")

//console.log(data.filter(k => testing(k)))   


function testing1(a,b)
{
 console.log(a)
 console.log(b)
 return 901;
}

console.log(data.map(testing1))


/*
When you pass testing1 to .map(), .map() automatically passes 3 arguments to the callback:

Parameter	Value	Meaning
a (1st arg)	The current element (10, 20, 30, 40, 50)	
b (2nd arg)	The index (0, 1, 2, 3, 4)	
3rd arg (not captured)	The entire array [10,20,30,40,50]	

*/


// ===================================================================
// KEY LEARNING NOTES: .map(), .filter() and Callback Functions
// ===================================================================
//
// 1. .map() and .filter() expect a FUNCTION (callback), NOT a value.
//
//    CORRECT ways to pass a function:
//      data.map(k => k * 2)                    // anonymous arrow function
//      data.map(function(k){ return k * 2 })   // anonymous function expression
//      data.map(testing)                        // named function reference (NO parentheses)
//
//    WRONG way (passes a value, not a function):
//      data.map(testing1(k))   // calls testing1 immediately, returns 901
//                               // then .map(901) → ERROR: 901 is not a function
//
// 2. .filter() callback must return boolean (true/false).
//      data.filter(k => k > 10)   // true → keep, false → remove → [20,30,40,50]
//
// 3. .map() callback must return a transformed value.
//      data.map(k => k * 2)       // returns new value for each element → [20,40,60,80,100]
//
// 4. The function is called AUTOMATICALLY by .map()/.filter().
//    You provide the function (the recipe).
//    .map()/.filter() calls it once for each element.
//    If you call it yourself with (), you pass the return value instead of the function.
//
// 5. Arrow function syntax explained:
//      k => { return 100; }
//      |  |   |____________|
//      |  |   Function body
//      |  Arrow operator (means "this is a function")
//      Parameter (each array element, one at a time)
//
//    k => is the same as writing function(k)
//    The arrow => is just a shorter way to define a function.
//
// 6. Summary:
//    .map()    → you provide a function → it calls it automatically → returns transformed values
//    .filter() → you provide a function → it calls it automatically → returns true/false
//    .reduce() → you provide a function → it calls it automatically → returns accumulated value
//
// 7. Fix for the error above:
//    console.log(data.map(k => testing1(k)))  // wrap in arrow function
//    console.log(data.map(testing1))           // pass function reference directly
// ===================================================================
