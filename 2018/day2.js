const input = require('fs').readFileSync('day2.txt', 'utf8');

const splitInput = input.trim().split("\n"); 
let totalTwo = 0;
let totalThree = 0;

for (let line of splitInput) {
    let counter = new Map();
    const cleanLine = line.trim();
    
    for (let char of cleanLine) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }
    
    const counts = Array.from(counter.values());
    if (counts.includes(2)) totalTwo++;
    if (counts.includes(3)) totalThree++;
}

console.log("Answer 1/2: ", totalThree * totalTwo);

const lines = input.trim().split('\n').map(l => l.trim());
for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
        const id1 = lines[i];
        const id2 = lines[j];
        
        let diffCount = 0;
        let commonChars = "";
        
        for (let k = 0; k < id1.length; k++) {
            if (id1[k] === id2[k]) {
                commonChars += id1[k];
            } else {
                diffCount++;
            }
            if (diffCount > 1) break;
        }
        
        if (diffCount === 1) {
            console.log("Answer 2/2:", commonChars);
            return;
        }
    }
}