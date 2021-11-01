// 병사 배치하기
const inputs = require('fs')
  .readFileSync('../text/18353.txt')
  .toString()
  .split('\n');
const n = +inputs[0];
const soldiers = inputs[1].split(' ').map(Number);

let dp = Array(n).fill(1);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (soldiers[j] > soldiers[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}
console.log(n - Math.max(...dp));
