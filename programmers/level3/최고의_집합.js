function solution(n, s) {
  if (n > s) {
    return [-1];
  }
  const divide = Math.floor(s / n);
  const set = Array(n).fill(divide);
  for (let i = 0; i < s % n; i++) {
    set[set.length - 1 - i] += 1;
  }
  return set;
}

console.log(solution(2, 9)); // [4,5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4,4]
