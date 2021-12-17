function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const failRates = Array(N).fill(0);
  const triedUsers = Array(N).fill(0);
  const stayingUsers = new Map();
  for (const stage of stages) {
    for (let i = 0; i < stage; i++) {
      if (i === N) continue;
      triedUsers[i]++;
    }
    stayingUsers.set(stage, (stayingUsers.get(stage) || 0) + 1);
  }
  triedUsers.forEach(
    (tried, i) => (failRates[i] = [i, (stayingUsers.get(i + 1) || 0) / tried])
  );
  return failRates.sort((a, b) => b[1] - a[1]).map(([index]) => index + 1);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
