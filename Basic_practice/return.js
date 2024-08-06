
// const Innomatrics = function(workAkash, workAkshit){

//     if(workAkash || workAkshit === "working"){

//         console.log("salary") 
//     }

//     else{
//         return "no salary"
//     }
// }

// console.log(Innomatrics("working", "working"))

let arr = [1,2,5,6,78,9];

function LinearSearch(key,arr){
    
    for(let i=0; i<arr.length; i++){

        if(arr[i]===key){
            return `Key found in ${i}th index having value ${arr[i]}`
        }
    }

}

console.log(LinearSearch(6,arr))