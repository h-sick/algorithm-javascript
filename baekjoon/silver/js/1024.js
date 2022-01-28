// 수열의 합

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
  .split('\n');

let [n, l] = inputs[0].split(' ').map(Number);

const getProgressionSum = () => {
  while (l <= 100) {
    const start = Math.floor(n / l) - Math.floor((l - 1) / 2);
    if (start < 0) {
      return -1;
    }

    const end = start + l - 1;
    const sum = (start + end) * (l / 2);
    if (sum === n) {
      return Array.from({ length: l }, (_, i) => start + i).join(' ');
    }
    l++;
  }
  return -1;
};
console.log(getProgressionSum());
