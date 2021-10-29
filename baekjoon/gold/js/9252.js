// LCS 2
const [s1, s2] = require('fs')
  .readFileSync('../text/9252.txt')
  .toString()
  .split('\n')
  .map((value) => value.trim());

let dp = Array.from({ length: s1.length + 1 }, () =>
  Array(s2.length + 1).fill('')
);

for (let i = 1; i <= s1.length; i++) {
  for (let j = 1; j <= s2.length; j++) {
    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      continue;
    }
    if (dp[i][j - 1].length > dp[i - 1][j].length) dp[i][j] = dp[i][j - 1];
    else dp[i][j] = dp[i - 1][j];
  }
}
if (dp[s1.length][s2.length] === '') {
  console.log(0);
  return;
}
console.log(`${dp[s1.length][s2.length].length}\n${dp[s1.length][s2.length]}`);
