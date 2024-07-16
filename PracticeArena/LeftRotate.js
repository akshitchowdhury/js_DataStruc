const arr = [1,2,3,45,5]

//Rotate/shift all elements by 1 postion and last elem sould be in 1st place

function leftRotate(arr){
    let neoArr = []
    
    neoArr[0] = arr[arr.length-1]
    for(let i=1; i< arr.length; i++){

        neoArr[i] = arr[i-1]
        
    }

    return neoArr;
}

console.log(leftRotate(arr))