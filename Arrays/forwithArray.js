let a1=[10,20,30,40,50];
for(let i=0;i<a1.length;i++){
    console.log(a1[i]);
}
// it iterates the value of the array with traditional for loop
for  (let i in a1){
    console.log(i);
}
// it iterates the index of the array

for (let i of a1){
    console.log(i);
}
// it iterates the value of the array with for...of loop