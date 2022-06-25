// 연산자 끼워넣기 (2)

const path = require('path');
const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? 'dev/stdin'
      : path.join(
          __dirname,
          `../text/${path.basename(__filename).split('.')[0]}.txt`
        )
  )
  .toString()
  .trim()
  .split('\n');

const n = +inputs[0];
const nums = inputs[1].split(' ').map(Number);
const operators = inputs[2].split(' ').map(Number);
const calcs = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => {
    if (a < 0) return -Math.floor(-a / b);
    return Math.floor(a / b);
  },
];

let max = -1000000000;
let min = 1000000000;
const dfs = (order, temp) => {
  if (order === n) {
    max = Math.max(max, temp);
    min = Math.min(min, temp);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (!operators[i]) continue;
    operators[i] -= 1;
    dfs(order + 1, calcs[i](temp, nums[order]));
    operators[i] += 1;
  }
};
dfs(1, nums[0]);

console.log(`${max}\n${min}`);
