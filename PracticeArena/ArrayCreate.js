//Create an Array using class

class Array{

    constructor(){
        this.data = {};
        this.length = 0;
    }

 pushElem(element) {
    this.data[this.length] = element  ;
          this.length++;
          return this.length;
    }

    popElem(){
        const lastElem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return this.length;
    }
}

const arr = new Array()

arr.pushElem(12)
arr.pushElem(13)
arr.pushElem(14)
arr.pushElem(15)

console.log(arr)

arr.popElem()
console.log(arr)