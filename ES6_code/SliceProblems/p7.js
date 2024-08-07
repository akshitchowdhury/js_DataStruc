// Given a string  use slice() to remove the "https://" part of the URL.

const url = 'https://www.example.com/page';

const httpsArr = url.split("://")

console.log(httpsArr.slice(1))