const { start } = require('repl');

const input = require('fs').readFileSync('2025/day5.txt', 'utf8');

const [rangesInput, foodsInput] = input.split("\n\n");

const ranges = rangesInput
    .trim()
    .split('\n')
    .map(line => {
        const [start, end] = line.split('-').map(Number);
        return { start, end };
    });

const foods = foodsInput
    .trim()
    .split('\n')
    .map(Number);

let freshCount = 0;

for (const food of foods) {
    const isFresh = ranges.some(range => food >= range.start && food <= range.end);
    if (isFresh) {
        freshCount++;
    }
}

console.log("Answer 1/2", freshCount);

ranges.sort((a, b) => a.start - b.start);

const mergedRanges = [];
let currentRange = ranges[0];

for (let i = 1; i < ranges.length; i++) {
    const nextRange = ranges[i];

    if (nextRange.start <= currentRange.end) {
        currentRange.end = Math.max(currentRange.end, nextRange.end);
    } else {
        mergedRanges.push(currentRange);
        currentRange = nextRange;
    }
}
mergedRanges.push(currentRange);

let freshIds = 0;
for (const range of mergedRanges) {
    freshIds += range.end - range.start + 1;
}

console.log("Answer 2/2:", freshIds);