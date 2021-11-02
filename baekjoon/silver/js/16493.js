// 최대 페이지 수
let inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/16493.txt'
  )
  .toString()
  .split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
let data = Array.from({ length: m }, () => Array(2).fill(0));
for (let i = 0; i < m; i++) {
  [data[i][0], data[i][1]] = inputs[i + 1].split(' ').map(Number);
}

// let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

// for (let i = 1; i <= m; i++) {
//   const [day, page] = data[i - 1];
//   for (let j = 1; j <= n; j++) {
//     if (j - day >= 0)
//       dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - day] + page);
//     else dp[i][j] = dp[i - 1][j];
//   }
// }
// console.log(dp[m][n]);

let dp = Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  const [day, page] = data[i];
  for (let j = n; j >= day; j--) {
    dp[j] = Math.max(dp[j], dp[j - day] + page);
    console.log(i, j, dp);
  }
}
console.log(dp[n]);
