// 꽃길

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

const n = +inputs.shift();
const ground = inputs.map(input => input.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const checked = Array.from({ length: n }, () => Array(n).fill(0));

const getSum = (x, y) => {
  if (checked[x][y]) return 0;
  let temp = 0;
  for (let k = 0; k < 4; k++) {
    const [nx, ny] = [x + dx[k], y + dy[k]];
    if (checked[nx][ny]) {
      return 0;
    }
    temp += ground[nx][ny];
  }
  return temp + ground[x][y];
};

const checkMap = (x, y, check = 1) => {
  checked[x][y] = check;
  for (let k = 0; k < 4; k++) {
    const [nx, ny] = [x + dx[k], y + dy[k]];
    checked[nx][ny] = check;
  }
};

let min = ground.reduce(
  (acc, cur) => acc + cur.reduce((rowAcc, rowCur) => rowAcc + rowCur, 0),
  0
);

const dfs = (count, total) => {
  if (count === 3) {
    min = Math.min(min, total);
    return;
  }

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      const sum = getSum(i, j);
      if (sum) {
        checkMap(i, j);
        dfs(count + 1, total + sum);
        checkMap(i, j, 0);
      }
    }
  }
};

for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < n - 1; j++) {
    dfs(0, 0);
  }
}

console.log(min);
