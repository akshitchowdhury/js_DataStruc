// Given a string ;, use slice() to extract the substring "world".

const greeting = 'Hello, world!';

const greetArr = greeting.split(", ")

console.log(greetArr[1].split("!").slice(0).join("").toString())