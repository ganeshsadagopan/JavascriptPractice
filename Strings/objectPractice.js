

let a=
{
   'name':'Sachin',
    'age': 50,
    'country':'India',
    'hobbies':['cicket','reading books'],
    'location':function()
    {
        return "Mumbai";
    }
}

console.log(a) // it will print the entire object
console.log(a.name) // it will print the value of the name key

console.log(a['age'])


for( let data in a)
{ 
    console.log(a[data])

}

a.name="Rahul" // it will change the value of the name key to Rahul
console.log(a.name) // it will print the updated value of the name key

a['age']=40 // it will change the value of the age key to 40
console.log(a['age']) // it will print the updated value of the age key

console.log(a.location())