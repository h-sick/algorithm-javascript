// 타일 채우기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2133.txt')
  .toString()
  .split('\n');

const n = +inputs[0];

const dp = Array(n + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= n; i++) {
  if (i % 2 === 1) continue;
  dp[i] = dp[i - 2] * 3;
  // 뒤에서 4칸 차이 부터 |==| 구조가 길어지는 것을
  // 변하지 않는 앞 부분에 2를 곱하고 더해주는 과정
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}
console.log(dp[n]);
