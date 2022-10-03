function solution(n, money) {
  let answer = 0;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  money.forEach((price) => {
    for (let i = price; i < n + 1; i++) {
      dp[i] += dp[i - price];
    }
  });
  return dp[n] % 1000000007;
}

console.log(solution(5, [1, 2, 5])); // 4
