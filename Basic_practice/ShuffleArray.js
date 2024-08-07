var shuffle = function() {
  let nums = [2,5,1,3,4,7], n = 3  

  let newNums = [];
   
  let firstPart=[]
  let secondPart=[]

  for(let i=0; i<n;i++){
    firstPart[i] = nums[i]
  }

  for(let j=n; j<nums.length; j++){
    secondPart[j-n] = nums[j]
  }


  for(let k=0; k< n;k++){

    newNums.push(firstPart[k])
    newNums.push(secondPart[k])
  }
    return newNums;
};

console.log(shuffle())