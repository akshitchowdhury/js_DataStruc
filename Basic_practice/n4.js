// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

let checkWord = "Robin Singh"

function wordSlicer(testWord, limiter){
let newWord = [];
let wordArr  = testWord.split("");
    for(let i =0; i<limiter; i++){
        newWord[i] = wordArr[i]
    }

    return newWord.join("")
}

console.log(wordSlicer(checkWord, 4))