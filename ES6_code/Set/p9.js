// Count of Unique Characters in a String: Given a string, write a function to count the number of unique characters in it.
//  Use a Set to keep track of unique characters.

let word = "applebanana"

let wordSet = new Set(word.split(""))

wordSet.forEach(e=>console.log(e))

