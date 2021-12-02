// 회의실 배정

let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1931.txt')
  .toString()
  .split('\n');
let n = +inputs[0];
inputs.shift();
let meetings = inputs.map((value) => value.split(' ').map((num) => +num));
meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let sum = 0,
  prevEnd = 0,
  count = 0;
for ([start, end] of meetings) {
  if (n - (sum + end - start) >= 0 && start >= prevEnd) {
    sum += end - start;
    prevEnd = end;
    count++;
  }
}
console.log(count);
