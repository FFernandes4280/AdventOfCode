const input = require("fs").readFileSync("./2024/day1.txt", "utf8");

const splitInput = input.trim().split("\n");

let listA = [];
let listB = [];

// 1. Parse the input into two separate arrays
for (let i = 0; i < splitInput.length; i++) {
  let line = splitInput[i];
  let [a, b] = line.split(/\s+/);
  listA.push(parseInt(a));
  listB.push(parseInt(b));
}

listA.sort((a, b) => a - b);
listB.sort((a, b) => a - b);

let totalDistance = 0;
for (let i = 0; i < listA.length; i++) {

totalDistance += Math.abs(listA[i] - listB[i]);

}

console.log("Solution 1/2", totalDistance);

const counts = {};
for (const num of listB) {
  counts[num] = (counts[num] || 0) + 1;
}

let similarityScore = 0;
for (const num of listA) {
  const countInB = counts[num] || 0;
  similarityScore += num * countInB;
}

console.log("Solution 2/2", similarityScore);