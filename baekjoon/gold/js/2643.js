// 색종이 올려 놓기

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
const papers = inputs.slice(1, n + 1).map(input =>
  input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
);

papers.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

const dp = Array(n).fill(1);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (papers[j][1] <= papers[i][1]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}
console.log(Math.max(...dp));
