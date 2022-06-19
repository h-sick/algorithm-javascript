// 알고스팟

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

const [m, n] = inputs[0].split(' ').map(Number);
const map = inputs
  .slice(1, n + 1)
  .map(input => input.trim().split('').map(Number));

const bfs = () => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const checked = Array.from({ length: n }, () => Array(m).fill(0));

  const queue = [[0, 0, 0]];
  checked[0][0] = 1;

  while (queue.length) {
    const [x, y, count] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || checked[nx][ny]) continue;

      if (map[nx][ny] === 0) {
        checked[nx][ny] = 1;
        queue.unshift([nx, ny, count]);
      }
      if (map[nx][ny] === 1) {
        checked[nx][ny] = 1;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
};
console.log(bfs());

// const checked = Array.from({ length: n }, () => Array(m).fill(0));
// checked[0][0] = 1;

// let min = Number.MAX_SAFE_INTEGER;
// const dfs = (x, y, crush) => {
//   if (crush >= min) return;
//   if (x === n - 1 && y === m - 1) {
//     min = Math.min(min, crush);
//     return;
//   }

//   for (let i = 0; i < 4; i++) {
//     const [nx, ny] = [x + dx[i], y + dy[i]];
//     if (nx >= 0 && nx < n && ny >= 0 && ny < m && !checked[nx][ny]) {
//       checked[nx][ny] = 1;
//       if (map[nx][ny] === 1) dfs(nx, ny, crush + 1);
//       if (map[nx][ny] === 0) dfs(nx, ny, crush);
//       checked[nx][ny] = 0;
//     }
//   }
// };
// dfs(0, 0, 0);
// console.log(min === Number.MAX_SAFE_INTEGER ? 0 : min);
