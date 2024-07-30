// Problem: Create a Student object with properties name, grade, subjects (array), 
// and a method addSubject to add a new subject to the subjects array.

function Student(name, grade){

    this.name = name;
    this.grade = grade;
    this.subjects = [];
    this.addSubject = function(subject1,subject2,subject3){
            let arr = [subject1,subject2,subject3]
        this.subjects.push(...arr);

        console.log(`Student nae is ${this.name} studying in the grade ${this.grade} and his subjects are : ${this.subjects}`)
    }

}

let student1  = new Student("Akhil", 5)

student1.addSubject("Maths", "Phy", "Chem")