const input = require('fs').readFileSync('2025/day6.txt', 'utf8');
// const input = `123 328  51 64 
//  45 64  387 23 
//   6 98  215 314
// *   +   *   +  `;

const splitInput = input
    .trim()
    .split("\n")
    .map(line => line.trim().split(/\s+/));

const rows = splitInput.length;
const cols = splitInput[0].length;

let grandTotal = 0;

for (let col = 0; col < cols; col++) {
    let operation;
    let currentTotal = 0;
    for (let row = rows - 1; row >= 0; row--) {
        const item = splitInput[row][col];
        if (row === rows - 1) {
            operation = item;
        } else {
            if (operation === '+') {
                currentTotal += parseInt(item);
            } else if (operation === '*') {
                currentTotal = (currentTotal || 1) * parseInt(item);
            }
        }
    }
    grandTotal += currentTotal;
}

console.log("Answer 1/2:", grandTotal);

// =========================================================
// PARTE 2: Lendo as colunas verticalmente
// =========================================================

let grandTotalPart2 = 0;

// 1. Recria as linhas originais (sem destruir os espaços)
const linesPart2 = input.replace(/\r/g, '').split('\n').filter(l => l.length > 0);
const numRowsPart2 = linesPart2.length;
const maxColsPart2 = Math.max(...linesPart2.map(l => l.length));

// 2. Mapeia as colunas separadoras (colunas onde TODAS as linhas têm apenas espaço)
const isSeparator = [];
for (let c = 0; c < maxColsPart2; c++) {
    let empty = true;
    for (let r = 0; r < numRowsPart2; r++) {
        if ((linesPart2[r][c] || ' ') !== ' ') {
            empty = false;
            break;
        }
    }
    isSeparator[c] = empty;
}

// 3. Processa cada bloco de problema individualmente
let startCol = 0;

while (startCol < maxColsPart2) {
    // Pula espaços vazios (colunas separadoras) antes do bloco
    while (startCol < maxColsPart2 && isSeparator[startCol]) {
        startCol++;
    }
    if (startCol >= maxColsPart2) break;

    // Descobre onde este bloco termina
    let endCol = startCol;
    while (endCol < maxColsPart2 && !isSeparator[endCol]) {
        endCol++;
    }

    // Procura o operador na última linha deste bloco específico
    let operator = null;
    for (let c = startCol; c < endCol; c++) {
        const char = linesPart2[numRowsPart2 - 1][c] || ' ';
        if (char === '+' || char === '*') {
            operator = char;
        }
    }

    let numbers = [];
    
    // 4. Lê as colunas da DIREITA para a ESQUERDA
    for (let c = endCol - 1; c >= startCol; c--) {
        let numStr = "";
        
        // Lê de cima para baixo (ignorando a última linha que tem o operador)
        for (let r = 0; r < numRowsPart2 - 1; r++) { 
            const char = linesPart2[r][c] || ' ';
            if (char >= '0' && char <= '9') {
                numStr += char;
            }
        }
        
        // Se formou um número válido nesta coluna vertical, guarda
        if (numStr.length > 0) {
            numbers.push(Number(numStr));
        }
    }

    // 5. Calcula o resultado deste bloco
    if (numbers.length > 0 && operator) {
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (operator === '+') result += numbers[i];
            if (operator === '*') result *= numbers[i];
        }
        grandTotalPart2 += result;
    }

    // Avança o cursor para o próximo bloco
    startCol = endCol;
}

console.log("Answer 2/2:", grandTotalPart2);