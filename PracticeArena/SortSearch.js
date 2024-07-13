const brr = [1,963,200,19,3,14152,2]

//sort and search 200 in this array

function sorter(brr){

    for(let i=1; i<brr.length; i++){
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


function search(brr, target){

    let low= 0 ;
    let high = brr.length-1
    while(low<=high){

        let mid = Math.floor((low+high)/2);
        let midVal = brr[mid];

        if(midVal=== target){
            return mid;
        }

        else if(midVal>target){
            high = mid-1;
        }
        else{
            low= mid+1;
        }

    }
    return -1;
}

console.log(sorter(brr))
console.log(search(brr,200))