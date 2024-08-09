// : Given two arrays, find the common elements between them.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set1 = new Set(array1);
const set2 = new Set(array2);

const CommonElements = [...set1].filter(element=> set2.has(element))

console.log(CommonElements)