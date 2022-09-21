function solution(arr) {
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };

  const least = (a, b) => (a * b) / greatest(a, b);

  return arr.reduce((acc, cur) => (acc = least(cur, acc)), 1);
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
