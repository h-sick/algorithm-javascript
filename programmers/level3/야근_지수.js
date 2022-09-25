function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur) <= n) {
    return 0;
  }

  const sorted = works.sort((a, b) => a - b);
  while (n) {
    const max = sorted[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i] -= 1;
        n -= 1;
      }
      if (!n) {
        break;
      }
    }
  }

  return sorted.reduce((acc, cur) => acc + cur ** 2, 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
