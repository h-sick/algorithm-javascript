function solution(n, t, m, p) {
  let turn = 0;
  let result = '';
  let number = 0;

  while (true) {
    const stringNumber = number.toString(n);
    for (const num of stringNumber) {
      if (result.length === t) {
        return result;
      }

      turn += 1;

      if (turn % m === p || (m === p && turn % m === 0)) {
        if (isNaN(num)) {
          result += num.toUpperCase();
        } else result += num;
      }
    }
    number += 1;
  }
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
