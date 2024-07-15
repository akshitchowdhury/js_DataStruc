const brr = [1,2,3,4,5]

//check if array is sorted or not


function sorter(arr){
    for(let i=1; i< arr.length; i++){

        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j-1;
        }

        arr[j+1] = key;

    }
    return arr;
}

const sortedArr = sorter([...brr])

function sortChecker(arr, sortedArr){
    
    for(let i=0; i< arr.length; i++){

        if(arr[i] != sortedArr[i]){
           return false;
        }

        
    }
    return true;
    
}

console.log(sortChecker(brr, sortedArr))