//Create an Array using class

class Array{

    constructor(){
        this.data = {};
        this.length = 0;
    }

 pushElem(element) {
          element = this.data[this.length];
          this.length++;
          return this.data;
    }
}

const arr = new Array()

arr.push(12)
arr.push(13)
arr.push(14)
arr.push(15)

console.log(arr)