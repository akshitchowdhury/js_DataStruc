//search the number 5 in the given array [20,14,22,9,5,42,10]

let arr = [20,14,22,9,42,10]

let brr = [67,32,5,12,90,1]
function search(arr){

    for(let i=0; i< arr.length; i++){
        if(arr[i] == 5){
            return true
        }
    }
    return false;
}

console.log(search(arr))  
console.log(search(brr))  