// 안녕

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
const sts = [0, ...inputs[1].split(' ').map(Number)];
const hps = [0, ...inputs[2].split(' ').map(Number)];

const dp = Array.from({ length: n + 1 }, () => Array(100).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < 100; j++) {
    if (sts[i] <= j) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - sts[i]] + hps[i]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}
console.log(dp[n][99]);
