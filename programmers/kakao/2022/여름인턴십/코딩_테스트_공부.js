function solution(alp, cop, problems) {
  const [maxAlp, maxCop] = problems.reduce(
    (max, [alp_req, cop_req]) => {
      max[0] = Math.max(max[0], alp, alp_req);
      max[1] = Math.max(max[1], cop, cop_req);
      return max;
    },
    [0, 0]
  );
  const calcMaxValue = (value, isAlgo = true) =>
    Math.min(isAlgo ? maxAlp : maxCop, value);

  const dp = Array.from(Array(maxAlp + 1), () =>
    Array(maxCop + 1).fill(Number.MAX_SAFE_INTEGER)
  );
  dp[alp][cop] = 0;

  const maxValue = { alp: null, cop: null };
  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
        maxValue.alp = calcMaxValue(i + 1);
        maxValue.cop = calcMaxValue(j + 1, false);
        dp[maxValue.alp][j] = Math.min(dp[maxValue.alp][j], dp[i][j] + 1);
        dp[i][maxValue.cop] = Math.min(dp[i][maxValue.cop], dp[i][j] + 1);

        if (alp_req <= i && cop_req <= j) {
          maxValue.alp = calcMaxValue(i + alp_rwd);
          maxValue.cop = calcMaxValue(j + cop_rwd, false);
          dp[maxValue.alp][maxValue.cop] = Math.min(
            dp[maxValue.alp][maxValue.cop],
            dp[i][j] + cost
          );
        }
      });
    }
  }
  return dp[maxAlp][maxCop];
}

console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ])
); // 15
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
); // 13
