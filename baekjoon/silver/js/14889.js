// 스타트와 링크

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

const n = +inputs.shift();

const powers = Array(n).fill([]);
for (let i = 0; i < n; i++) {
  powers[i] = inputs[i].split(' ').map(Number);
}

const checks = Array(n).fill(0);
let min = Number.MAX_SAFE_INTEGER;

const calcDiff = (count, from) => {
  if (count === n / 2) {
    const sums = [0, 0];
    const teams = [[], []];

    for (let i = 0; i < n; i++) {
      if (checks[i]) teams[0].push(i);
      else teams[1].push(i);
    }

    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        sums[0] +=
          powers[teams[0][i]][teams[0][j]] + powers[teams[0][j]][teams[0][i]];
        sums[1] +=
          powers[teams[1][i]][teams[1][j]] + powers[teams[1][j]][teams[1][i]];
      }
    }
    min = Math.min(Math.abs(sums[0] - sums[1]), min);
    return;
  }

  for (let i = from; i < n; i++) {
    checks[i] = 1;
    calcDiff(count + 1, i + 1);
    checks[i] = 0;
  }
};
calcDiff(0, 0);

console.log(min);
