var smallerNumbersThanCurrent = function() {
    
    let nums = [8,1,2,2,3]

    let countArr= new Array(nums.length)

    

    for(let i=0 ; i<nums.length; i++){
        let countVal = 0;
        for(let j=0; j<nums.length; j++){

            if(nums[i]> nums[j]){
                countVal++;
            }
        }
        countArr[i] = countVal;
    }

    return countArr;
};

console.log(smallerNumbersThanCurrent())