// 두 용액

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2470.txt')
  .toString()
  .split('\n');

let n = +inputs[0];
let numbers = inputs[1].split(' ').map(Number);
numbers.sort((a, b) => a - b);

let set = [],
  min = Number.MAX_SAFE_INTEGER;

let left = 0,
  right = n - 1;
while (left < right) {
  let diff = numbers[left] + numbers[right];
  if (min > Math.abs(diff)) {
    min = Math.abs(diff);
    set = [numbers[left], numbers[right]];
  }
  if (diff === 0) break;
  if (diff > 0) right--;
  if (diff < 0) left++;
}
console.log(set.join(' '));
