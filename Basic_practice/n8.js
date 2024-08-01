// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"


let word = "js string exercises"

let wordArr = word.split(" ");

let newArr = []
for(let i=0; i<wordArr.length; i++){;

        
        
    wordArr[i]=wordArr[i].charAt(0).toUpperCase()+wordArr[i].substring(1);

}

console.log( wordArr.join(" ")
)

