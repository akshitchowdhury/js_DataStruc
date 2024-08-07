// Given an array const scores = [90, 85, 80, 75, 70, 65, 60];, use slice() to create a new array containing the last 3 elements.

const scores = [90, 85, 80, 75, 70, 65, 60];

const newScores = scores.slice(scores.length-3)

console.log(newScores)