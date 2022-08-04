function solution(N, number) {
  const calculateFunctions = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2,
  ];

  const dp = Array.from(Array(9), () => new Set());
  for (let count = 1; count < 9; count++) {
    dp[count].add(+String(N).repeat(count));
    for (let part = 1; part < count; part++) {
      dp[part].forEach(num1 => {
        dp[count - part].forEach(num2 => {
          calculateFunctions.forEach(calcFunc => {
            dp[count].add(calcFunc(num1, num2));
          });
        });
      });
    }
    if (dp[count].has(number)) {
      return count;
    }
  }
  return -1;
}

console.log(solution(5, 12)); // 4
console.log(solution(2, 11)); // 3
