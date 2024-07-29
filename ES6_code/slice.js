// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers.slice(1,5));

// let sentence = "This is an example sentence.";

// let wrods = sentence.split(" ");
// console.log(wrods);

// let csv = "name,age,city";

// console.log(csv.split(","))

// let url = "user@example.com"

// console.log(url.split("@")[1])

// let word = "sentence"

// console.log(word.split("").length)

// let fileExt = "document.txt"

// console.log(fileExt.split(".")[1])

// let date = "2024-07-29";

// let datePArts = date.split("-");

// let formattedDate = `${datePArts[2]}/${datePArts[1]}/${datePArts[0]}`

// console.log(formattedDate)


// function wordCheck(){
    
// let sentence = "Find the longest word in this sentence";
// let checkSentence = sentence.split(" ")
// let longestWord = "";
// let eachWord;

// for(let i= 0; i<checkSentence.length; i++){

//      eachWord = checkSentence[i]
//      console.log(eachWord+"--->"+ eachWord.length)

//     if(eachWord.length>longestWord.length){
//         longestWord = eachWord;
//     }
// }
// return longestWord;
// }

// console.log(wordCheck())

let fullWord =  "John Doe" ;

let initials = fullWord.split(" ")

console.log(initials[0].charAt(0))
console.log(initials[1].charAt(0))