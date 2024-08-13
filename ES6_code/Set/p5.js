// Problem: Given an array of strings, count the number of unique strings.

const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];

const uniqueStrings = new Set(strings)

console.log(uniqueStrings)