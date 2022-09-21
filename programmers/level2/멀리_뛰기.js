function solution(n) {
  const MOD = 1234567;
  const dp = [0, 1, 2];

  const fibonacci = (n) => {
    if (dp[n] || n <= 2) {
      return dp[n];
    }
    return (dp[n] = (fibonacci(n - 1) + fibonacci(n - 2)) % MOD);
  };
  return fibonacci(n);
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
