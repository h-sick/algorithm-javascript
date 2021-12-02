// 행복 유치원

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/13164.txt'
  )
  .toString()
  .split('\n');
let [n, k] = inputs[0].split(' ').map(Number);
let heights = inputs[1].split(' ').map(Number);

let diffs = [];
for (let i = 1; i < n; i++) {
  diffs.push(heights[i] - heights[i - 1]);
}
diffs.sort((a, b) => a - b);
diffs = diffs.slice(0, n - k);
const cost = diffs.reduce((acc, cur) => acc + cur, 0);
console.log(cost);
