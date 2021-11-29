// 선 긋기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2170.txt')
  .toString()
  .split('\n');
const n = +inputs[0];

const lines = Array.from({ length: n }, () => Array());
for (let i = 1; i <= n; i++) {
  lines[i - 1] = inputs[i].split(' ').map(Number);
}
lines.sort((a, b) => (a[1] === b[1] ? a[1] - b[1] : a[0] - b[0]));

let lastPoint = Number.MIN_SAFE_INTEGER;
let total = 0;
for ([start, end] of lines) {
  if (start >= lastPoint) {
    total += end - start;
    lastPoint = end;
  } else {
    if (end > lastPoint) {
      total += end - lastPoint;
      lastPoint = end;
    }
  }
}
console.log(total);
