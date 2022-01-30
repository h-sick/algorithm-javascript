// 주사위 쌓기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2116.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const dices = Array.from({ length: n }, () => Array());

for (let i = 1; i <= n; i++) dices[i - 1] = inputs[i].split(' ').map(Number);

const diceOpposite = {
  0: 5,
  1: 3,
  2: 4,
  3: 1,
  4: 2,
  5: 0,
};

let total = 0;
for (let i = 0; i < 6; i++) {
  let top = dices[0][i];

  let sum = 0;
  for (let j = 0; j < n; j++) {
    const bottom = top;
    const bottomIndex = dices[j].indexOf(bottom);
    const topIndex = diceOpposite[bottomIndex];
    top = dices[j][topIndex];

    let max = 6;
    while (top === max || bottom === max) {
      max--;
    }
    sum += max;
  }
  total = Math.max(total, sum);
}
console.log(total);
