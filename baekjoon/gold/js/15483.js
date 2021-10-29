// 최소 편집

const [A, B] = require('fs')
  .readFileSync('../text/15483.txt')
  .toString()
  .split('\n')
  .map((value) => value.trim());

let dp = Array.from({ length: A.length + 1 }, () =>
  Array(B.length + 1).fill(0)
);

for (let i = 1; i <= A.length; i++) dp[i][0] = i;
for (let i = 1; i <= B.length; i++) dp[0][i] = i;
for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1];
    else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
  }
}
console.log(dp[A.length][B.length]);
