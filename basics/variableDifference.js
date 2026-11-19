
// let scope of the variable is global level and block level
let a=10
// global variable 'a' is declared and initialized with the value 10

function display()
{
    console.log(a) // since it is global variable it can be accessed inside the function 
   if(true)
   {
    let a=100
    console.log(a)
    } // block level variable 'a' is declared and initialized with the value 100, it will print 100

}

display()

// Bottom line: let behaves the same at global and 
// function level — no re-declaration allowed in the same scope. The only way to re-declare let is in a different (nested) block.