const input = require('fs').readFileSync('2015/day5.txt', 'utf8');

const splitInput = input.trim().split('\n');

let niceCount = 0;
let doNots = [
    "ab", "cd", "pq", "xy"
];

for (let i = 0; splitInput.length > i; i++) {
    let word = splitInput[i];
    let vowels = 0;
    let isNice = false;
    if (doNots.some(bad => word.includes(bad))) continue;
    for (let j = 0; word.length > j; j++) {
        if ("aeiou".includes(word[j])) vowels++;
        if (j > 0 && word[j] === word[j - 1]) {
            isNice = true;
        }
    }
    if (3 > vowels || !isNice) continue;
    niceCount++;
}

console.log("Solution 1/2", niceCount);

niceCount = 0;
for (let i = 0; splitInput.length > i; i++) {
    let word = splitInput[i];
    let condA, condB;
    condA = condB = false;
    let duals = new Set();
    for (let j = 0; word.length > j; j++) {
        let currentPair = word[j - 1] + word[j];

        if (j > 1) {
            if (duals.has(currentPair)) {
                condA = true;
            }
            let oldPair = word[j - 2] + word[j - 1];
            duals.add(oldPair);
        }
        if (j > 1 && word[j] === word[j - 2]) {
            condB = true;
        }
    }
    if (!condA || !condB) continue;
    niceCount++;
}
console.log("Solution 2/2", niceCount);