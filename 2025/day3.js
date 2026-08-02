const input = require('fs').readFileSync('2025/day3.txt', 'utf8');
// const input = `987654321111111
// 811111111111119
// 234234234234278
// 818181911112111`;

const splitInput = input.trim().split('\n');

let joltage = 0;

for (let i = 0; i < splitInput.length; i++) {
    let batteries = splitInput[i].split('').map(Number);

    let max = Math.max(...batteries.slice(0, -1));
    let secondMax = 0;

    for (let j = batteries.indexOf(max) + 1; batteries.length > j; j++) {
        if (batteries[j] > secondMax) {
            secondMax = batteries[j];
        }
    }
    joltage += max * 10 + secondMax;
    // console.log(max * 10 + secondMax);
}

console.log("Solution 1/2", joltage);

joltage = 0;

for (let i = 0; i < splitInput.length; i++) {
    let batteries = splitInput[i].trim().split('').map(Number);
    
    let lastIndex = 0; 
    let selectedDigits = [];

    for (let digitCount = 0; digitCount < 12; digitCount++) {
        let digitsNeededAfter = 11 - digitCount;
        
        let searchWindow = batteries.slice(lastIndex, batteries.length - digitsNeededAfter);
        
        let max = Math.max(...searchWindow);
        let maxIndex = batteries.indexOf(max, lastIndex);
        
        selectedDigits.push(max);
        lastIndex = maxIndex + 1;
    }

    let lineJoltage = Number(selectedDigits.join(''));
    joltage += lineJoltage;
}

console.log("Solution 2/2:", joltage);