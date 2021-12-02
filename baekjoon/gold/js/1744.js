// 수 묶기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1744.txt')
  .toString()
  .split('\n');
const n = +inputs[0];
const numbers = Array(n);

for (let i = 1; i <= n; i++) numbers[i - 1] = +inputs[i];
numbers.sort((a, b) => a - b);

const negative = [];
const positive = [];
let zero = 0;
for (const number of numbers) {
  if (number < 0) negative.push(number);
  if (number > 0) positive.push(number);
  if (number === 0) zero++;
}

let total = 0;
if (negative.length % 2 === 1 && zero) {
  negative.pop();
  zero--;
}
for (let i = 0; i < negative.length; i += 2) {
  if (negative[i + 1]) total += negative[i] * negative[i + 1];
  else total += negative[i];
}

for (let i = positive.length - 1; i >= 0; i -= 2) {
  if (positive[i - 1] && positive[i] > 1 && positive[i - 1] > 1) {
    total += positive[i] * positive[i - 1];
  } else {
    while (i >= 0) {
      total += positive[i];
      i--;
    }
  }
}
console.log(total);
