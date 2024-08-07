// Given a string , use slice() to extract the substring "quick brown fox".

const sentence = 'The quick brown fox jumps over the lazy dog.';

const wordArr = sentence.split(" ")
console.log(wordArr)
const part = wordArr.slice(1,4)

console.log(part.join(" ").toString())