var createTargetArray = function() {
  
    let nums = [1,2,3,4,0], index = [0,1,2,3,0]
    let targetArr = []
    for(let i=0; i<nums.length; i++){


        targetArr.splice(index[i],0, nums[i])

    }

    return targetArr;

};


console.log(createTargetArray())