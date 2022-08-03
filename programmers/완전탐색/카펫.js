function solution(brown, yellow) {
  const total = brown + yellow;
  for (let height = 3; height <= (brown - 2) / 2; height++) {
    if (total % height) continue;

    const width = total / height;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

console.log(solution(10, 2)); // [4,3]
console.log(solution(8, 1)); // [3,3]
console.log(solution(24, 24)); // [8,6]
