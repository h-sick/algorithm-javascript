// 가장 긴 짝수 연속한 부분 수열 (large)

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/22862.txt'
  )
  .toString()
  .split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
let numbers = inputs[1].split(' ').map(Number);

let left = 0,
  even = 0,
  answer = 0;
for (let right = 0; right < n; right++) {
  if (numbers[right] % 2 === 0) even++;
  else {
    k--;
    while (k < 0) {
      if (numbers[left++] % 2 === 1) k++;
      else even--;
    }
  }
  answer = Math.max(answer, even);
}
console.log(answer);
