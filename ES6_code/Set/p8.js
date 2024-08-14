//  Given two arrays, write a function to return a new array containing only the elements that are in the first array but not in the second. 
// Use Set to compute the difference.

let arr1 = [1,2,34,5,6]

let arr2 = [23,34,6,78,10]

let set1 = new Set(arr1)
let set2 = new Set(arr2)

let uniqueArr = set1.forEach(e=> console.log(!set2.has(e)))

uniqueArr