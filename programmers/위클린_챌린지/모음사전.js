function solution(word) {
  const charIndex = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  const counts = Array(5);
  for (let i = 4; i >= 0; i--) {
    counts[i] = (counts[i + 1] || 0) * 5 + 1;
  }

  return word
    .split('')
    .reduce((acc, char, i) => acc + charIndex[char] * counts[i] + 1, 0);
}

console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); // 1189
