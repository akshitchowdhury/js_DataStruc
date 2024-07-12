const arr = [14,1,43,20,9,33,142,22]
const brr = [1,963,200,19,3,14152,2]

function insertSorter(arr){

    for(let i =1; i<arr.length;i++){

        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){

            arr[j+1] = arr[j];
            j= j-1;
        }

        arr[j+1] = key;
    }
    return arr
}

console.log(insertSorter(arr))
console.log(insertSorter(brr))