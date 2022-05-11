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

const dp = Array(n + 1).fill(0);
dp[1] = 3;
dp[2] = 7;

for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
console.log(dp[n]);

// dfs 시간초과
// let count = 0;
// const dfs = (left, right, step) => {
//   if (step === n) {
//     count += 1;
//     return;
//   }

//   dfs(false, false, step + 1);

//   if (!right) {
//     dfs(false, true, step + 1);
//   }

//   if (!left) {
//     dfs(true, false, step + 1);
//   }
// };
// dfs(false, false, 0);

// console.log(count % 9901);
