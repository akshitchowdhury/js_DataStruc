// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"


function cameCase(wrod){

    

    let result =""
    for(let i=0; i< wrod.length; i++){
        
        if(wrod.charAt(i)===wrod.charAt(i).toLowerCase()){
            result+= wrod.charAt(i).toUpperCase()
        }
        else{
            result+= wrod.charAt(i).toLowerCase();
        }
    }
    
    return result;
}
let wrod = "bbbbcCCCPp"
console.log(cameCase(wrod))