function solution(queue1, queue2) {
  const n = queue1.length;
  const queue = [...queue1, ...queue2];

  const sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const half = (sum1 + sum2) / 2;

  let sum = sum1;
  let count = 0;

  let start = 0;
  let end = n - 1;
  while (count < 4 * n) {
    if (sum === half) {
      return count;
    }
    count += 1;

    if (sum < half) {
      end += 1;
      sum += queue[end];
      continue;
    }
    if (sum > half) {
      sum -= queue[start];
      start += 1;
    }
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
