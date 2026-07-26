const input = require("fs").readFileSync("./2023/day1.txt", "utf8");

const splitInput = input.trim().split('\n');

let totalCalibrations = 0;

for (let i = 0; splitInput.length > i; i++) {
    let word = splitInput[i];
    let l = 0;
    let r = word.length - 1;
    while (r >= l) {
        if (isNaN(word[l])) {
            l++; 
        } else if (isNaN(word[r])) {
            r--; 
        } else {
            totalCalibrations += parseInt(word[l] + word[r]);
            break; 
        }
    }
}
console.log(totalCalibrations);