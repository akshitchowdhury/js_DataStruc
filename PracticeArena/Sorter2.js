const arr = [14,1,43,20,9,33,142,22]
const brr = [1,963,200,19,3,14152,2]

function insertionSorter(givenArray){

    for(let i=1; i<givenArray.length; i++){

        let key = givenArray[i]
        let j = i-1;

        while(j>=0 && givenArray[j]> key){
            givenArray[j+1] = givenArray[j];
            j = j-1;
        }
        givenArray[j+1] = key
    }

    return givenArray
}


console.log(insertionSorter(arr))
console.log(insertionSorter(brr))