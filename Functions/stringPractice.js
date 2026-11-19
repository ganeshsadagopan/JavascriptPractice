
let s="Hello World"
console.log(s.length) // it returns the length of the string

console.log(s[0]) // it returns the character at index 0
console.log(s[6]) // it returns the character at index 6

let data=s.split(" ") // it splits the string into an array of substrings based on the specified separator (space in this case)

let output=data.map((k)=>{
    if(k.toLowerCase()=="world"){
        console.log("world is present")
        return true
    }
    else
    {
        return 100;
    }
})
console.log(output)


let newStr=s.slice(0,5) // it extracts a section of the string and returns it as a new string, without modifying the original string. In this case, it will return "Hello" (characters from index 0 to 4). The original string 's' remains unchanged.
console.log(newStr)


console.log(s.toUpperCase()) // it converts the string to uppercase
console.log(s.toLowerCase()) // it converts the string to lowercase


partseInt("123") // it converts the string "123" to the integer 123
parseFloat("3.14") // it converts the string "3.14" to the floating-point number 3.14

trim() // it removes whitespace from both ends of a string
