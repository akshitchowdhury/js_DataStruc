// Given an array of integers, write a function to return a new array with only the unique elements, removing any duplicates. Use a Set to accomplish this.

let array = [1,2,2,3,3,3,3,4,5,6,6,6,6,6,6,6]

let uniqueArr = new Set(array)
let nums = []
uniqueArr.forEach(e => nums.push(e))

console.log(nums)