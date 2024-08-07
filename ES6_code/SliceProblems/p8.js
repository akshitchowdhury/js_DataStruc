// Given a string , use slice() to extract the file extension "pdf".

const filename = 'document.pdf';

console.log(filename.split(".").slice(1).toString())