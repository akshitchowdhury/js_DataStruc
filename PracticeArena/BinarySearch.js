const arr = [1,2,3,4,5,6,7,8]

function binarySearch(arr, target){

    let low = 0;
    let high = arr.length-1;

    while(low<=high){

        let mid = Math.floor((low+high)/2)

        let midVal = arr[mid];

        if(target=== midVal){
            return mid;
        }

        else if(target< midVal){
            high = mid-1
        }
        else {
            low =mid+1
        }
    }
    return -1;
}

console.log(binarySearch(arr, 6))

