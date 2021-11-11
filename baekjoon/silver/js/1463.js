// 1로 만들기

let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1463.txt')
  .toString()
  .split('\n')[0];

let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
dp[1] = 0;

for (let i = 2; i <= n + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  for (let x of [2, 3]) {
    if (i % x === 0) dp[i] = Math.min(dp[i], dp[i / x] + 1);
  }
}
console.log(dp[n]);
