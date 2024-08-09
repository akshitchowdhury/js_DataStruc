// Given an array of numbers that may contain duplicates, create a new array containing only the unique values.

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNum = [...new Set(numbers)];

console.log(uniqueNum)
