// 월드컵

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

const games = inputs.slice(0, 4).map(input =>
  input
    .split(' ')
    .map(Number)
    .reduce(
      (acc, _, i, arr) =>
        i === 2 || i % 3 === 2 ? acc.concat([arr.slice(i - 2, i + 1)]) : acc,
      []
    )
);

const match = Array.from({ length: 6 }, () => Array(3).fill(0));
const result = Array(4).fill(0);

let finished = false;
const dfs = (round, t1, t2) => {
  if (finished) return;
  if (round === 15) {
    for (let k = 0; k < 4; k++) {
      if (result[k]) continue;
      let same = true;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (games[k][i][j] !== match[i][j]) {
            same = false;
            break;
          }
        }
        if (!same) break;
      }
      if (same) {
        result[k] = 1;
        if (result.reduce((acc, cur) => acc + cur, 0) === 4) {
          finished = true;
        }
      }
    }
    return;
  }

  match[t1][0]++;
  match[t2][2]++;
  dfs(round + 1, t2 === 5 ? t1 + 1 : t1, t2 === 5 ? t1 + 2 : t2 + 1);
  match[t1][0]--;
  match[t2][2]--;

  match[t1][2]++;
  match[t2][0]++;
  dfs(round + 1, t2 === 5 ? t1 + 1 : t1, t2 === 5 ? t1 + 2 : t2 + 1);
  match[t1][2]--;
  match[t2][0]--;

  match[t1][1]++;
  match[t2][1]++;
  dfs(round + 1, t2 === 5 ? t1 + 1 : t1, t2 === 5 ? t1 + 2 : t2 + 1);
  match[t1][1]--;
  match[t2][1]--;
};

dfs(0, 0, 1);
console.log(result.join(' '));
