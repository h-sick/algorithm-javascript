function solution(number, k) {
  const answer = [];
  for (let num of number) {
    while (k > 0 && answer[answer.length - 1] < num) {
      answer.pop(num);
      k -= 1;
    }
    answer.push(num);
  }
  return answer.join('').slice(0, number.length - k);
}

console.log(solution('1924', 2)); // "94"
console.log(solution('1231234', 3)); // "3234"
console.log(solution('4177252841', 4)); // "775841"
