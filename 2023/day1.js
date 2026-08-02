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

console.log("Solution 1/2", totalCalibrations);

totalCalibrations = 0;

for (let i = 0; splitInput.length > i; i++) {
    let word = splitInput[i];
    let sanitizedWord = sanitizeWord(word);
    let l = 0;
    let r = sanitizedWord.length - 1;
    while (r >= l) {
        if (isNaN(sanitizedWord[l])) {
            l++;
        } else if (isNaN(sanitizedWord[r])) {
            r--;
        } else {
            totalCalibrations += parseInt(sanitizedWord[l] + sanitizedWord[r]);
            break;
        }
    }
}

console.log("Solution 2/2", totalCalibrations);

function sanitizeWord(word) {
    const replacements = {
        "one": "o1e",
        "two": "t2o",
        "three": "t3e",
        "four": "f4r",
        "five": "f5e",
        "six": "s6x",
        "seven": "s7n",
        "eight": "e8t",
        "nine": "n9e"
    };

    for (let [text, rep] of Object.entries(replacements)) {
        word = word.replaceAll(text, rep);
    }

    return word;
}