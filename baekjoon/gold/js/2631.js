// 줄세우기

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

const n = +inputs.shift();
const people = inputs.map(input => +input.trim());

const dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (people[i] < people[j]) {
      dp[j] = Math.max(dp[i] + 1, dp[j]);
    }
  }
}
console.log(n - Math.max(...dp));
