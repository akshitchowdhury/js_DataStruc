// Problem: Create a Book object with properties like title,
//  author, year, and a method getSummary that returns a summary of the book.

function Book(title,author, year){

    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        console.log(`Title of the book is ${this.title} which is written by ${this.author} and was published in
            the year ${this.year}`)
    }
}

let book1 = new Book("Coding", "Ramesh", 2024)
let book2 = new Book("MAchine Learning", "Johnathan", 1996)

book1.getSummary();
book2.getSummary();