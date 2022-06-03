// 숨바꼭질 5

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

const getFastestTime = () => {
  let [n, k] = inputs[0].split(' ').map(Number);

  const checked = Array.from({ length: 2 }, () => Array(500001).fill(0));
  checked[0][n] = 1;

  let level = 0;
  const queue = [n];
  while (queue.length) {
    const queueSize = queue.length;
    k = k + level;
    if (k > 500000) {
      return -1;
    }
    if (checked[level % 2][k] === 1) {
      return level;
    }
    level += 1;

    for (let i = 0; i < queueSize; i++) {
      const x = queue.shift();
      for (const nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= 500000 && checked[level % 2][nx] === 0) {
          checked[level % 2][nx] = 1;
          queue.push(nx);
        }
      }
    }
  }
};
console.log(getFastestTime());
