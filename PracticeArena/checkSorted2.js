const brr = [1,2,0,1,5]


function sortChecker(arr){

    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return "unsorted"
        }
    }
    return "sorted"
}

console.log(sortChecker(brr))