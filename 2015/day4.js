const input = `iwrupvqb`;

const crypto = require('crypto');

let number = 1;

while (true) {
  const attempt = input + number;

  // Gera o hash MD5 da string e converte para hexadecimal
  const hash = crypto.createHash('md5').update(attempt).digest('hex');

  // Checa se o hash começa com 5 zeros
  if (hash.startsWith('000000')) {
    console.log(number);
    break;
  }

  number++;
}