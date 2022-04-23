// 근손실

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
const kits = inputs[1].split(' ').map(Number);

let muscles = 500;
const checked = Array(n).fill(0);

let answer = 0;
const dfs = count => {
  if (count === n) {
    answer += 1;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (checked[i]) continue;
    if (muscles - k + kits[i] >= 500) {
      muscles -= k;
      muscles += kits[i];
      checked[i] = 1;
      dfs(count + 1);
      checked[i] = 0;
      muscles += k;
      muscles -= kits[i];
    }
  }
};
dfs(0);

console.log(answer);
