// 꿀 따기

const path = require('path');
const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? 'dev/stdin'
      : path.join(
          __dirname,
          `../text/${path.basename(__filename).split('.')[0]}.txt`
        )
  )
  .toString()
  .trim()
  .split('\n');

const n = +inputs[0];
const honey = inputs[1].split(' ').map(Number);

const sum = Array(n).fill(0);
sum[0] = honey[0];

for (let i = 1; i < n; i++) {
  sum[i] += sum[i - 1] + honey[i];
}

const total = sum[n - 1];
let max = 0;

for (let i = 1; i < n - 1; i++) {
  max = Math.max(max, total - sum[i] + total - (honey[i] + honey[0]));
}

for (let i = 1; i < n - 1; i++) {
  max = Math.max(max, sum[i - 1] + total - (honey[i] + honey[n - 1]));
}

for (let i = 1; i < n - 1; i++) {
  max = Math.max(max, total + honey[i] - (honey[0] + honey[n - 1]));
}
console.log(max);
