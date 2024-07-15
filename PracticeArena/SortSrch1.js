const brr = [1,963,200,19,3,14152,2]

//search 3 on this array

function sorter(brr){
        for(let i=1; i< brr.length; i++){

            let key = brr[i];
            let j = i-1;
            
            while(j>=0 && brr[j]> key){

                brr[j+1] = brr[j]
                j = j-1;
            }
            brr[j+1] = key;
        }
        return brr;
}

function search(target, brr){

    let left =0; 
    let right = brr.length-1;
    while(left<= right){

        let mid = Math.floor((left+right)/2)
        let midVal = brr[mid];

        if(target=== midVal){
            return mid;
        }
        else if(target< midVal){
            right = mid-1;
        }
        else{
            left = mid+1
        }
    }
    return -1;
}


console.log(sorter(brr))
console.log(search(3, brr))