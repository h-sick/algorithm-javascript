// RGB 거리

const inputs = require('fs')
  .readFileSync('../text/1149.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
let costs = [];
for (let i = 1; i <= n; i++) {
  costs.push(inputs[i].split(' ').map(Number));
}

let dp = Array.from({ length: n }, () => Array(n).fill(0));
dp[0] = [...costs[0]];

for (let i = 1; i < n; i++) {
  dp[i] = [
    costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]),
    costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]),
    costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]),
  ];
}
console.log(Math.min(...dp[n - 1]));
