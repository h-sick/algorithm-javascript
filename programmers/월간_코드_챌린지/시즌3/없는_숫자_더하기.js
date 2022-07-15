function solution(numbers) {
  let sum = 0;
  const zeroToNine = Array.from(Array(10), (_, i) => i);
  for (const num of zeroToNine) {
    if (numbers.includes(num)) continue;
    sum += num;
  }
  return sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
