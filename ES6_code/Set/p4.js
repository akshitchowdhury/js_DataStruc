//  Given two arrays, check if the second array is a subset of the first array.
const array1 = [1, 2, 3, 4, 5];
const array2 = [6,7];

const set1 = new Set(array1)
const set2 = new Set(array2)
if ([...set1].every(element=> set2.has(element))){
    console.log(true)
}
else{
    console.log(false)
}
