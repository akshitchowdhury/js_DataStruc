

class Array{

    constructor(){
        
        this.length = 0;
        this.data = {};
    }

    pushElement(element){

        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    popElement(){
        const item = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return this.length;
    }

    getElement(index){

        for(let i= 0 ; i< this.length; i++){
            return this.data[index] ;
        }
    }
}

const newElement = new Array();

newElement.pushElement(20)
newElement.pushElement(21)
newElement.pushElement(22)
newElement.pushElement(23)
newElement.pushElement(24)
newElement.pushElement(25)

console.log(newElement)

newElement.popElement()
newElement.popElement()

console.log(newElement)
console.log(newElement.getElement(0))