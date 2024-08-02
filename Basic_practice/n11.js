// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

let word = "Ha!"
function repeatString(word, times){
let newWord= "";
for(let i=0; i<times; i++){
    newWord+= word;
}

return newWord;
}

console.log(repeatString(word, 2))
