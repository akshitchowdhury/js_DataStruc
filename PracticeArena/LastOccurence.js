

// Input sorted array 
arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9,9,9]; 

function lastOccur(arr, target){

    let left = 0;
    let right = arr.length-1;
    let result = -1;
    while(left<=right){

        let mid = Math.floor((left+right)/2);
        let midVal = arr[mid];

        if(target===midVal ){
            result= mid;
            left = mid+1
        }

        else if(target<midVal){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
        
    }
    return result;
}

console.log(lastOccur(arr,9))
console.log(arr.length)