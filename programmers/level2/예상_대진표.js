function solution(n, a, b) {
  let round = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
  }
  return round;
}

console.log(solution(8, 4, 7)); // 3
