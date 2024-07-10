//reverse the array

let arr = [1,2,3,4,5,6]

// function reverse(arr){

//     const revArr = new Array(arr.length)

//     for(let i=0; i<arr.length; i++){
//         revArr[i] = arr[arr.length-1-i]
//     }

//     return revArr;
// }

// console.log(reverse(arr))

function effecientRec(arr){

    let left = 0;
    let right = arr.length-1;

    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr;
}

console.log(effecientRec(arr))
