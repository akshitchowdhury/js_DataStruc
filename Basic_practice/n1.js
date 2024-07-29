let word = "w3resource";

let wordArr = word.split("");

// let revWord = wordArr.reverse().join("");

let revWord = [];
for(let i=wordArr.length-1; i>=0; i--){
 
    revWord[i-1] = wordArr[i];
    
}

console.log(revWord.join(""))

