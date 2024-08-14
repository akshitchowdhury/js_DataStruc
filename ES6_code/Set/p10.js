// Union of Multiple Arrays: Given multiple arrays, write a function to return a single array that contains all unique elements across all the input arrays. 
// Use Set to handle the union of these arrays.

let arr1 = [0,1,3,4,5,6]
let arr2 = [4,5,6,7,8,9]
let arr3 = [7,8,9,10,11,12]
let arr4 = [11,12,13,14,0]

let uniqueSet = new Set([...arr1,...arr2,...arr3,...arr4])

let uniqueArr = []

uniqueSet.forEach(uniqueArr.push(e))

console.log(uniqueArr)