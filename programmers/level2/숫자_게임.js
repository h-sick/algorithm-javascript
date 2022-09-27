function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let left = 0;
  let right = 0;
  while (right < B.length) {
    right += 1;
    if (A[left] >= B[right - 1]) {
      continue;
    }
    left += 1;
  }
  return left;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
