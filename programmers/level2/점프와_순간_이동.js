function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      n -= 1;
      battery += 1;
      continue;
    }
    n /= 2;
  }
  return battery;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
