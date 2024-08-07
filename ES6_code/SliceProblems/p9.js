// Given a string const quote = 'To be or not to be, that is the question.';, use slice() with negative indexes to extract the last 10 characters of the string.

const quote = 'To be or not to be, that is the question.';

const charArr = quote.split("")

console.log(charArr.slice(-10).join("").toString())