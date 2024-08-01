// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

let word = "Robin Singh from USA"



let wordArr = word.split(" ");

let smallArr = []
for(let i=0; i<wordArr.length; i++){

    smallArr[i] = wordArr[i].toString().toLowerCase()

}




console.log(smallArr.join("-")) 