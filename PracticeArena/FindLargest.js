const array = [1,963,200,19,3,14152,2]

function sorter(arr){

    for(let i=1; i<arr.length; i++){

        let key = arr[i];
        let j =i-1;

        while(j>=0 && arr[j]>key){

            arr[j+1] = arr[j];
            j = j-1;
        }

        arr[j+1] = key;
    }

    return arr;
}

console.log(sorter(array))
console.log(`largest element in the given array is ${array[array.length-1]}`)