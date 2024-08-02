// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function displayFirst(arr, elemNos=1){

    let displayArr = [];
    if(elemNos<0){
        return []
    }

    if(elemNos<=arr.length){
        
        for(let i=0; i<elemNos; i++){

            displayArr[i] = arr[i]; 
        }

        return displayArr;
    }

    else{
        return arr;
    }

}

let arr = [7,9,0,-2]

console.log(displayFirst(arr))