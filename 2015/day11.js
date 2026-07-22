const input = `cqjxxyzz`;

let splitInput = input.trim().split("");

while (true) {
    increment(splitInput);

    const currentStr = splitInput.join("");

    if (!currentStr.includes(["i", "l", "o"]) &&
        hasTwoPairs(splitInput.join("")) &&
        hasIncreasingStraight(splitInput.join(""))) {
        break;
    }
}


console.log(splitInput.join(""));

function increment(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 'z') {
            arr[i] = 'a'; 
        } else {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
            break; 
        }
    }
}

function hasTwoPairs(password) {
    const pairs = new Set();

    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            pairs.add(password[i]);
            i++;
        }
    }

    return pairs.size >= 2;
}

function hasIncreasingStraight(password) {
    for (let i = 0; i < password.length - 2; i++) {
        const c1 = password.charCodeAt(i);
        const c2 = password.charCodeAt(i + 1);
        const c3 = password.charCodeAt(i + 2);

        if (c2 === c1 + 1 && c3 === c2 + 1) {
            return true;
        }
    }
    return false;
}