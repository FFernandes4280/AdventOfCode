const input = require('fs').readFileSync('day7.txt', 'utf8');
// const input = `.......S.......
// ...............
// .......^.......
// ...............
// ......^.^......
// ...............
// .....^.^.^.....
// ...............
// ....^.^...^....
// ...............
// ...^.^...^.^...
// ...............
// ..^...^.....^..
// ...............
// .^.^.^.^.^...^.
// ...............`
const splitInput = input.split('\n').map(line => line.split(''));

let startingPoint = [0, splitInput[0].indexOf('S')];
let splits = 0;

for (let i = 0; splitInput.length - 1 > i; i++) {
    for (let j = 0; splitInput[i].length > j; j++) {
        let current = splitInput[i][j];

        if (current === 'S' || current === '|') {
            let below = splitInput[i + 1][j];

            if (below === '.') {
                splitInput[i + 1][j] = '|';
            } else if (below === '^') {
                splits++;
                if (j > 0) splitInput[i + 1][j - 1] = '|';
                if (j < splitInput[i].length - 1) splitInput[i + 1][j + 1] = '|';
            }
        }
    }
}

console.log("Answer 1/2: " + splits);

const lines = input.trim().split('\n');
const R = lines.length;
const C = lines[0].length;

const count = Array.from({ length: R }, () => Array(C).fill(0n));

const sCol = lines[0].indexOf('S');
count[0][sCol] = 1n;

for (let i = 0; i < R - 1; i++) {
    for (let j = 0; j < C; j++) {
        const numBeams = count[i][j];
        if (numBeams === 0n) continue;

        const belowChar = lines[i + 1][j];

        if (belowChar === '.') {
            count[i + 1][j] += numBeams;
        } else if (belowChar === '^') {
            if (j > 0) count[i + 1][j - 1] += numBeams;
            if (j < C - 1) count[i + 1][j + 1] += numBeams;
        }
    }
}

const totalTimelines = count[R - 1].reduce((sum, val) => sum + val, 0n);

console.log("Answer 2/2: " + totalTimelines);

