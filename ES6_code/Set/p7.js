// Intersection of Two Arrays: Given two arrays, write a function to return a new array containing only the elements that are present in both arrays.
//  Use Set operations to find the intersection.

let arr1 = [12,34,5,6,7]
let arr2 = [5,6,7,90,100]

let setArr1  = new Set(arr1)
let setArr2  = new Set(arr2)

let commonArray = arr1.filter(e=> setArr2.has(e))

console.log(commonArray)