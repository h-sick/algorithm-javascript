function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const remain = n % a;

    n = Math.floor(n / a) * b;
    answer += n;
    n += remain;
  }
  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
console.log(solution(3, 2, 20)); // 36
