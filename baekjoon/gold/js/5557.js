// 1학년

const inputs = require('fs')
  .readFileSync('../text/5557.txt')
  .toString()
  .split('\n');

let n = +inputs[0];
let numbers = inputs[1].split(' ').map(Number);

let dp = Array.from({ length: n - 1 }, () => Array(21).fill(BigInt(0)));
dp[0][numbers[0]] = BigInt(1);

for (let i = 1; i < n - 1; i++) {
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j]) {
      if (j + numbers[i] <= 20) dp[i][j + numbers[i]] += dp[i - 1][j];
      if (j - numbers[i] >= 0) dp[i][j - numbers[i]] += dp[i - 1][j];
    }
  }
}
console.log(dp[n - 2][numbers[n - 1]].toString());
