// Given two arrays, find the elements that are present in the first array but not in the second.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set1 = new Set(array1)
const set2 = new Set(array2)

const uniqueElem = [...set1].filter(element=> !set2.has(element))

console.log(uniqueElem)