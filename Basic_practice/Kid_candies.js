var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    const res = []

    for (let i = 0; i < candies.length; i++) {
        res.push(candies[i] + extraCandies >= max)
    }

    return res
};

let candies = [2,3,5,1,3]
console.log(kidsWithCandies(candies,3))
