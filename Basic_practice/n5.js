// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

let word  = " "



function BlankChecker(word){

    let wrdArr = word.split("");
    if(wrdArr.length>=1 && wrdArr[0]=== " "){
        return true
    }
    
    else{
        return false
    }
}

console.log(BlankChecker("  "))

