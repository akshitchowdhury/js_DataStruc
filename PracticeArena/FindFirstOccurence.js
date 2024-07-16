// FindFirstOccurence

// JavaScript Program to Find Index of First Occurrence of Target Element in Sorted Array

const arr = [4,6,8,1,3,2,10,5]

function sorter(arr){

    for(let i=1; i< arr.length; i++){

        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]> key){
            arr[j+1] = arr[j]

            j = j-1;
        }

        arr[j+1] = key;
    }
    return arr
}

const sortedArr = sorter([...arr])

function FindFirstOccurence(sortedArr, target){

    let left = 0;
    let right = sortedArr.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let midVal = sortedArr[mid];

        if(target=== midVal){
            return mid;
        }

        else if(target< midVal){
            right = mid-1;
        }
        else{
            left = mid+1;
        }

    }
    return -1;

}


console.log(sorter(arr))
console.log(FindFirstOccurence(sortedArr, 3))