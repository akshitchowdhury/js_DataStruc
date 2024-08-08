var numIdenticalPairs = function(nums) {
  
    let numCopy = [...nums].sort((a,b)=>a-b)
    let pairCount = 0;
    for(let i=0; i<numCopy.length-1;i++){
        for(let j = i+1; j<numCopy.length; j++){

            if(numCopy[i]===numCopy[j]){
                pairCount++
            }
        }
    }

    return pairCount;
};

console.log(numIdenticalPairs())