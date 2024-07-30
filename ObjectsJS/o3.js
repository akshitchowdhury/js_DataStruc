//  Create a Movie object with properties title, director, releaseYear,
//  and a method getInfo that returns a string with the movie's information.

function Movie(title,director,releaseYear){

    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.getInfo = function(){
        console.log(`The movie ${this.title} was directed by ${this.direcor} and 
            was released in the year ${this.releaseYear}`)
    }
}


let movie1 = new Movie("AOT", "Isseyama", 2003)
let movie2  = new Movie("BNHA", "DEKU", 2015)

movie1.getInfo();
movie2.getInfo();