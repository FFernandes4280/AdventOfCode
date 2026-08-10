const input = require('fs').readFileSync("day3.txt", "utf-8");

const splitInput = input.trim().split("\n");

let possible = 0;

for (let i = 0; splitInput.length > i; i++) {
    let line = splitInput[i];
    let numbers = line.match(/\d+/g).map(Number);
    numbers.sort((a,b) => a - b);
    if((numbers[0] + numbers[1]) > numbers[2]) possible++;    
}

console.log("Answer 1/2: ", possible);

possible = 0;
for (let i = 0; splitInput.length > i; i += 3) {
    let row1 = splitInput[i].match(/\d+/g).map(Number);
    let row2 = splitInput[i + 1].match(/\d+/g).map(Number);
    let row3 = splitInput[i + 2].match(/\d+/g).map(Number);

    for (let col = 0; col < 3; col++) {
        let numbers = [row1[col], row2[col], row3[col]];
        numbers.sort((a,b) => a - b);
        if((numbers[0] + numbers[1]) > numbers[2]) possible++;    
    }
}

console.log("Answer 2/2: ", possible);