// 귀여운 라이언

let inputs = require('fs')
  .readFileSync('../text/15565.txt')
  .toString()
  .split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
let dolls = inputs[1].split(' ').map(Number);

let left = dolls.indexOf(1),
  count = 0,
  min = n;
for (let right = left; right < n; right++) {
  if (dolls[right] === 1) count++;
  if (count === k) {
    min = Math.min(min, right - left + 1);
    left++;
    while (dolls[left] === 2 && left <= right) left++;
    count--;
  }
}
if (min === n) min = -1;
console.log(min);
