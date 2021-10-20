// 부분합

const inputs = require('fs')
  .readFileSync('../text/1806.txt')
  .toString()
  .split('\n');

let [n, s] = inputs[0].split(' ').map(Number);
let numbers = inputs[1].split(' ').map(Number);

let left = 0,
  sum = [0, 0],
  answer = Number.MAX_SAFE_INTEGER;
for (let right = 0; right < n; right++) {
  sum[0] += numbers[right];
  sum[1]++;
  while (sum[0] >= s) {
    sum[0] -= numbers[left++];
    sum[1]--;
    answer = Math.min(answer, sum[1] + 1);
  }
}
if (answer === Number.MAX_SAFE_INTEGER) answer = 0;
console.log(answer);
