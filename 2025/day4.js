const input = require('fs').readFileSync('2025/day4.txt', 'utf8');

const matrix = input
    .trim()
    .split('\n')
    .map(linha => linha.split(''));

let totalRolls = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let isRoll = matrix[i][j];
        if (isRoll === '@') {
            let currentRolls = 0;
            let rowsToCheck = [{ i, j: (j - 1) }, { i, j: (j + 1) },
            { i: (i - 1), j }, { i: (i + 1), j },
            { i: (i - 1), j: (j - 1) }, { i: (i - 1), j: (j + 1) },
            { i: (i + 1), j: (j - 1) }, { i: (i + 1), j: (j + 1) }];
            for (let target of rowsToCheck) {
                if (matrix[target.i]?.[target.j] === "@") currentRolls++;
            }
            if (4 > currentRolls) totalRolls++;
            currentRolls = 0;
        }
    }
}

console.log("Answer 1/2:", totalRolls);

totalRolls = 0;
let previousTotalRolls = null;
while (totalRolls != previousTotalRolls) {
    previousTotalRolls = totalRolls;
    let rollsToClean = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let isRoll = matrix[i][j];
            if (isRoll === '@') {
                let currentRolls = 0;
                let rowsToCheck = [{ i, j: (j - 1) }, { i, j: (j + 1) },
                { i: (i - 1), j }, { i: (i + 1), j },
                { i: (i - 1), j: (j - 1) }, { i: (i - 1), j: (j + 1) },
                { i: (i + 1), j: (j - 1) }, { i: (i + 1), j: (j + 1) }];
                for (let target of rowsToCheck) {
                    if (matrix[target.i]?.[target.j] === "@") currentRolls++;
                }
                if (4 > currentRolls) {
                    totalRolls++;
                    rollsToClean.push({i, j});
                }
                currentRolls = 0;
            }
        }
    }
    for(let roll of rollsToClean) {
        matrix[roll.i][roll.j] = ".";
    }
}
console.log("Answer 2/2:", totalRolls);