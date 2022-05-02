function solution(n, results) {
  const dp = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  );

  for (const [a, b] of results) {
    dp[a][b] = 1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dp[i][j] > dp[i][k] + dp[k][j]) {
          dp[i][j] = dp[i][k] + dp[k][j];
        }
        // i => j 의 경기 결과는 알 수 없는데
        // i => k 와 k => j 의 경기 결과는 알 수 있을 때
        // if (dp[i][j] !== 1 && dp[i][k] === 1 && dp[k][j] === 1) {
        //   dp[i][j] = 1;
        // }
      }
    }
  }

  const counts = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dp[i][j] !== Number.MAX_SAFE_INTEGER) {
        counts[i]++;
        counts[j]++;
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (counts[i] === n - 1) answer++;
  }
  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // 21
