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

const [n, k] = inputs[0].split(' ').map(Number);

const getFastTime = (n, k) => {
  if (n === k) return 0;

  const checked = Array(1000001).fill(0);
  checked[n] = 1;

  const queue = [[n, 0]];
  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === k) {
      return time;
    }

    for (const next of [cur * 2, cur - 1, cur + 1]) {
      if (checked[next] || next < 0 || next > 100000) continue;
      checked[next] = 1;
      if (next === cur * 2) queue.unshift([next, time]);
      else queue.push([next, time + 1]);
    }
  }
};
console.log(getFastTime(n, k));
