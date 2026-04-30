
let a=10
if(a==10){
    console.log("a is equal to 10")
}

// this block of code will only execute if the condition in the if statement is true. In this case, since a is equal to 10, the message "a is equal to 10" will be printed to the console.
if(a>20){
    console.log("a is greater than 5")
}
// In this block of code, the condition in the if statement is false since a is not greater than 20. Therefore, the message "a is greater than 5" will not be printed to the console.

if(10==5)
{
    console.log("10 is equal to 5")
}
else if(10>5){
    console.log("10 is greater than 5")
}



for(let k=0;k<10;k++)
    {
     console.log(k)
     if(k==5){
        break
     }

    }

n=10
while(n>0){
    if(n==5){
        n--
        continue
    }
    console.log(n)
    n-- 
   
}   


a=10
b="10"

if(a==b){
    console.log("a and b are equal")
}

a=10
b="10"

if(!(a===b)){
    console.log("a and b are not equal")
}

data=a===b ? "a and b are equal" : "a and b are not equal"
console.log(data)