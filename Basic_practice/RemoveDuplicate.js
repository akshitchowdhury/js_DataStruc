var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 1; // Start from the second element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
};

// Example usage:
let nums = [0, 0, 1, 2, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(nums.slice(0, k)); // Output the unique elements
console.log(k); // Output the number of unique elements
