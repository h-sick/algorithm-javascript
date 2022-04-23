// 포도주 시식

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
const wines = inputs.map(Number);

const dp = Array(n + 1).fill(0);
dp[1] = wines[1];
dp[2] = wines[1] + wines[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    wines[i] + wines[i - 1] + dp[i - 3],
    wines[i] + dp[i - 2],
    dp[i - 1]
  );
}
console.log(dp[n]);
