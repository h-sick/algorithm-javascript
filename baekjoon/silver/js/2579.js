// 계단 오르기

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
const scores = inputs.map(Number);

const dp = Array(n + 3).fill(0);
dp[n] = scores[n];
dp[n - 1] = scores[n - 1] + scores[n];
dp[n - 2] = scores[n - 2] + scores[n];

for (let i = n - 3; i > 0; i--) {
  dp[i] = Math.max(
    scores[i] + scores[i + 1] + dp[i + 3],
    scores[i] + dp[i + 2]
  );
}
console.log(Math.max(dp[1], dp[2]));
