// 플로이드

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
const m = +inputs[1];

const costs = Array.from({ length: n + 1 }, () =>
  Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
);
for (let i = 2; i < 2 + m; i++) {
  const [from, to, cost] = inputs[i].split(' ').map(Number);
  costs[from][to] = Math.min(cost, costs[from][to]);
}
for (let i = 1; i <= n; i++) costs[i][i] = 0;

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (costs[i][j] > costs[i][k] + costs[k][j]) {
        costs[i][j] = costs[i][k] + costs[k][j];
      }
    }
  }
}
costs
  .slice(1)
  .map(row =>
    row
      .slice(1)
      .map(cost => (cost === Number.MAX_SAFE_INTEGER ? 0 : cost))
      .join(' ')
  )
  .forEach(row => console.log(row));
