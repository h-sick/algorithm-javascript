function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const result = Array(N).fill(0);

  let left = stages.length;
  let index = 0;
  for (let stage = 1; stage <= N; stage++) {
    let count = 0;
    while (stages[index] === stage && index < stages.length) {
      index += 1;
      count += 1;
    }
    result[stage - 1] = left ? count / left : 0;
    left -= count;
  }
  return result
    .map((probability, i) => [probability, i])
    .sort((a, b) => b[0] - a[0])
    .map(([_, i]) => i + 1);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
