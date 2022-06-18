// 파이프 옮기기 2

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
const map = inputs.slice(1, 1 + n).map(input => input.split(' ').map(Number));

const dp = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Array(3).fill(0))
);

const [HORIZONTAL, DIAGONAL, VERTICAL] = [0, 1, 2];
const dx = [0, 1, 1];
const dy = [1, 1, 0];

const dfs = (x, y, dir) => {
  if (dp[x][y][dir]) return dp[x][y][dir];
  if (x === n - 1 && y === n - 1) return 1;

  for (let nextDir = 0; nextDir < 3; nextDir++) {
    if (dir === HORIZONTAL && nextDir === VERTICAL) continue;
    if (dir === VERTICAL && nextDir === HORIZONTAL) continue;

    const [nx, ny] = [x + dx[nextDir], y + dy[nextDir]];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && map[nx][ny] === 0) {
      if (nextDir === DIAGONAL) {
        if (map[nx - 1][ny] === 1 || map[nx][ny - 1] === 1) continue;
      }
      dp[x][y][dir] += dfs(nx, ny, nextDir);
    }
  }
  return dp[x][y][dir];
};

console.log(dfs(0, 1, HORIZONTAL));
