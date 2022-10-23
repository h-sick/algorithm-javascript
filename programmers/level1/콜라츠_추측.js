function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer += 1;
  }
  return num == 1 ? answer : -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
