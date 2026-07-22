const input = `R2, L5, L4, L5, R4, R1, L4, R5, R3, R1, L1, L1, R4, L4, L1, R4, L4, R4, L3, R5, R4, R1, R3, L1, L1, R1, L2, R5, L4, L3, R1, L2, L2, R192, L3, R5, R48, R5, L2, R76, R4, R2, R1, L1, L5, L1, R185, L5, L1, R5, L4, R1, R3, L4, L3, R1, L5, R4, L4, R4, R5, L3, L1, L2, L4, L3, L4, R2, R2, L3, L5, R2, R5, L1, R1, L3, L5, L3, R4, L4, R3, L1, R5, L3, R2, R4, R2, L1, R3, L1, L3, L5, R4, R5, R2, R2, L5, L3, L1, L1, L5, L2, L3, R3, R3, L3, L4, L5, R2, L1, R1, R3, R4, L2, R1, L1, R3, R3, L4, L2, R5, R5, L1, R4, L5, L5, R1, L5, R4, R2, L1, L4, R1, L1, L1, L5, R3, R4, L2, R1, R2, R1, R1, R3, L5, R1, R4
`;

let splitInput = input.trim().split(", ");

let direction = 0; // 0: North, 1: East, 2: South, 3: West
let visited = new Set();
let start = { x: 0, y: 0 };
visited.add(`${start.x},${start.y}`);
let result;

for (let i = 0; splitInput.length > i; i++) {
    if (splitInput[i][0] === "R") direction = (direction + 1) % 4;
    else direction = (direction + 3) % 4;

    switch (direction) {
        case 0: {
            let amount = parseInt(splitInput[i].substring(1));
            while (amount > 0) {
                start.y += 1;
                let key = `${start.x},${start.y}`;

                if (visited.has(key)) {
                    result = Math.abs(start.x) + Math.abs(start.y);
                    console.log(`Primeiro local visitado duas vezes: ${result}`);
                    return;
                }

                visited.add(key);
                amount--;
            }
            break;
        }
        case 1: {
            let amount = parseInt(splitInput[i].substring(1));
            while (amount > 0) {
                start.x += 1;
                let key = `${start.x},${start.y}`;

                if (visited.has(key)) {
                    result = Math.abs(start.x) + Math.abs(start.y);
                    console.log(`Primeiro local visitado duas vezes: ${result}`);
                    return;
                }

                visited.add(key);
                amount--;
            }
            break; 
        }
        case 2: {
            let amount = parseInt(splitInput[i].substring(1));
            while (amount > 0) {
                start.y -= 1;
                let key = `${start.x},${start.y}`;

                if (visited.has(key)) {
                    result = Math.abs(start.x) + Math.abs(start.y);
                    console.log(`Primeiro local visitado duas vezes: ${result}`);
                    return;
                }

                visited.add(key);
                amount--;
            }
            break;
        }
        case 3: {
            let amount = parseInt(splitInput[i].substring(1));
            while (amount > 0) {
                start.x -= 1;
                let key = `${start.x},${start.y}`;

                if (visited.has(key)) {
                    result = Math.abs(start.x) + Math.abs(start.y);
                    console.log(`Primeiro local visitado duas vezes: ${result}`);
                    return;
                }

                visited.add(key);
                amount--;
            }
            break;
        }
    }
}